'use strict';

const util = require('hexo-util');
const fs = require('hexo-fs');
const moment = require('moment');
const axios = require('axios');
const config = hexo.config.webpushr;

const endpoint = config.endpoint || 'segment';
let newPostOnlineSite;
let topic = [];
let actionButtons = [];

if (config.enable) {
    // 排序获得最新文章信息，并写入本地文件
    hexo.on('generateAfter', async () => {
        const posts = hexo.locals.get('posts').data;
        const sortBy = config.sort === 'date' ? 'date' : 'updated';
        const updatedSortedPosts = posts.sort((a, b) => b[sortBy] - a[sortBy]);
        const newPost = updatedSortedPosts[0];
        if (sortBy === 'date') newPost.updated = newPost.date;

        const JSONFeed = {
            title: newPost.title,
            updated: newPost.updated.format(),
            message: newPost.description || util.stripHTML(newPost.excerpt),
            target_url: newPost.permalink,
            image: newPost.cover || config.image,
            categories: newPost.categories.data.map(v => v.name),
            schedule: newPost.schedule || moment().add(config.delay || 10, 'minutes'),
            expire: newPost.expire || config.expire || '7d',
            auto_hide: newPost.auto_hide || config.auto_hide || '1',
            webpushr: newPost.webpushr
        };
        await fs.writeFile('public/newPost.json', JSON.stringify(JSONFeed));
    });

    // 生成 sw-js 文件
    if (!config.sw_self) {
        hexo.on('generateAfter', async () => {
            await fs.writeFile('public/webpushr-sw.js', 'importScripts("https://cdn.webpushr.com/sw-server.min.js");');
        });
    }

    // 生成 html 后插入代码
    hexo.extend.filter.register('after_render:html', data => {
        const swOption = config.sw_self ? "'none'" : "undefined";

        const payload = `(function (w, d, s, id) {
        if (typeof (w.webpushr) !== 'undefined') return;
        w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
        var js, fjs = d.getElementsByTagName(s)[0];
        js = d.createElement(s);
        js.id = id;
        js.async = 1;
        js.src = "https://cdn.webpushr.com/app.min.js";
        fjs.parentNode.appendChild(js);
        }(window, document, 'script', 'webpushr-jssdk'));

        webpushr('setup', {
        'key': '${config.trackingCode}',
        'sw': ${swOption}
        });
        `;
        return data.replace(/<body.+?>(?!<\/body>).+?<\/body>/s, str => str.replace('</body>', `<script>${decodeURI(payload)}</script></body>`));
    });

    // 部署前获取在线 newPost.json（旧版本）
    hexo.on("deployBefore", async () => {
        hexo.log.info('正在获取 在线 最新文章信息');
        newPostOnlineSite = async () => {
            try {
                const result = await axios.get(`${hexo.config.url}/newPost.json`, {
                    headers: { Accept: 'application/json' }
                });
                return result.data;
            } catch (e) {
                return {};
            }
        };
    });

    // 部署后读取本地和部署前获取到的在线版本信息
    hexo.on('deployAfter', async () => {
        let newPostLocal;
        try {
            newPostLocal = JSON.parse(await fs.readFileSync('public/newPost.json'));
        } catch (e) {
            hexo.log.error('获取本地版本 "newPost.json" 失败，可能为未生成文件或读取超时');
            return false;
        }

        let newPostOnlineSiteData;
        try {
            newPostOnlineSiteData = await newPostOnlineSite();
        } catch (e) {
            hexo.log.error('获取在线版本 "newPost.json" 失败，可能为首次推送更新或站点无法访问');
            return false;
        }

        // 判断文章分类是否属于主题
        function isValidPostCategory() {
            if (endpoint === 'segment' && config.categories && config.segment) {
                for (let i = 0; i < newPostLocal.categories.length; i++) {
                    const index = config.categories.indexOf(newPostLocal.categories[i]);
                    if (index === -1) return false;
                    topic[i] = config.segment[index];
                }
            }
            return true;
        }

        // 判断是否需要推送通知
        function shouldPushNotification() {
            if (newPostLocal.webpushr === false) {
                hexo.log.info('本文章配置为不推送,已跳过已跳过本次推送');
                return false;
            }

            if (endpoint === 'sid' && !config.sid) {
                hexo.log.error('未配置具体 sid');
                return false;
            }

            if (endpoint === 'segment' && (!config.categories || !config.segment)) {
                hexo.log.error('默认为按主题推送,需配置categories及segment');
                return false;
            }

            if (endpoint === 'segment' && !isValidPostCategory()) {
                hexo.log.info('未满足分类条件,已跳过本次推送');
                return false;
            }

            if (newPostOnlineSiteData.updated === newPostLocal.updated) {
                hexo.log.info('文章无更新,已跳过本次推送');
                return false;
            }

            hexo.log.info('检测到文章更新,准备推送通知');
            return true;
        }

        // 满足条件，推送更新通知
        if (shouldPushNotification()) {
            const headers = {
                webpushrKey: process.env.webpushrKey || config.webpushrKey,
                webpushrAuthToken: process.env.webpushrAuthToken || config.webpushrAuthToken,
                "Content-Type": "application/json"
            };

            if (config.action_buttons && Array.isArray(config.action_buttons)) {
                config.action_buttons.forEach(button => {
                    actionButtons.push({
                        title: button.title || '前往查看',
                        url: button.url || newPostLocal.target_url
                    });
                });
            } else {
                actionButtons.push({
                    title: '前往查看',
                    url: newPostLocal.target_url
                });
            }

            if (actionButtons.length > 3) {
                hexo.log.warn('提示: 不推荐您配置过多按钮');
                hexo.log.info('本次已截取前 3 个按钮，并且建议您修改您的配置');
                actionButtons = actionButtons.slice(0, 3);
            }

            const payloadTemplate = {
                name: newPostLocal.title,
                title: newPostLocal.title,
                message: newPostLocal.message,
                target_url: newPostLocal.target_url,
                image: newPostLocal.image,
                icon: config.icon,
                auto_hide: newPostLocal.auto_hide,
                expire_push: newPostLocal.expire,
                action_buttons: actionButtons,
            };

            let payload = { ...payloadTemplate };

            if (endpoint === 'segment') {
                payload.segment = topic;
            }

            if (config.sid) {
                payload.sid = config.sid;
                delete payload.image;
            }

            if (actionButtons.length === 0) {
                delete payload.action_buttons;
            }

            if (config.delay === '0' && actionButtons.length === 0) {
                delete payload.action_buttons;
            } else {
                payload.send_at = moment(newPostLocal.schedule).format();
            }

            hexo.log.info('正在推送文章更新,请稍后');
            hexo.log.info('以下是推送内容:', payload);

            try {
                const res = await axios.post(`https://api.webpushr.com/v1/notification/send/${endpoint}`, payload, { headers });
                hexo.log.info(`《${newPostLocal.title}》推送更新成功!`);
                hexo.log.info('以下是接口返回信息:', res.data);
            } catch (err) {
                hexo.log.error(`《${newPostLocal.title}》推送更新失败!`);
                hexo.log.error('以下是接口返回信息:', err.response ? err.response.data : err.message);
            }
        }
    });
}
