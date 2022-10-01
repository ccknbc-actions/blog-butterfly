/* global hexo */
/* eslint no-param-reassign:0, strict:0 */
"use strict";

const fs = require('hexo-fs');
var request = require('request');
const url = require("url");

// triggered after hexo generate.
// this output the newPost.json into public/.
hexo.on("generateAfter", async function (post) {
    var posts = hexo.locals.get("posts").data;
    var updatedSortedPosts = posts
        .sort(function (a, b) {
            return b.updated - a.updated;
        })
        .map(function (v) {
            return v;
        });
    var newPost = updatedSortedPosts[0];
    var JSONFeed = {
        title: newPost.title,
        id: newPost.path,
        date_updated: newPost.updated.format("L"),
        summary: newPost.description,
        url: newPost.permalink,
        cover: newPost.cover,
        // tags: newPost.tags.data.map(function (v) {
        //     return v.name;
        // }),
        categories: newPost.categories.data.map(function (v) {
            return v.name;
        }),
    };
    fs.writeFile(
        "public/newPost.json",
        JSON.stringify(JSONFeed),
        function (err, data) {
            hexo.log.info("Generated: newPost.json");
        }
    );
});

//triggered before hexo deploy.
//it compare the newPost.json from your site and local to decide whether push the notification.
hexo.on("deployAfter", async function (post) {
    // Get newPost.json from your site.
    // var newPostOnlineSite = await fetch(
    //     url.resolve("https://blog.ccknbc.cc/newPost.json")
    // );
    var newPostOnlineSite = await fetch(url.resolve(hexo.config.url, "newPost.json"));
    var newPostOnlineSite = await newPostOnlineSite.json();
    newPostOnlineSite = JSON.parse(JSON.stringify(newPostOnlineSite));
    // Get newPost.json from your local.
    var newPostLocal = await fs.readFileSync("public/newPost.json");
    // Get newPost.json from local
    newPostLocal = JSON.parse(newPostLocal);
    // console.table({
    //     "From online site": newPostOnlineSite,
    //     "From Local": newPostLocal
    // });
    if(newPostLocal.categories == "工作")
    {
        var topic = "484223"
    }
    if(newPostLocal.categories == "博客")
    {
        var topic = "484224"
    }
    if(newPostLocal.categories == "工具")
    {
        var topic = "484225"
    }
    if(newPostLocal.categories == "生活")
    {
        var topic = "484226"
    }
    if(newPostLocal.categories == "音乐")
    {
        var topic = "484227"
    }
    if(newPostLocal.categories == "学习")
    {
        var topic = "484229"
    }

    //determine whether to push web notification
    if (newPostOnlineSite.date_updated != newPostLocal.date_updated) {
        // push new Post notification
        var payload = {
            title: newPostLocal.title,
            message: newPostLocal.summary,
            target_url: newPostLocal.url,
            image: newPostLocal.cover,
            auto_hide: "1",
            segment: [topic],
            icon: "https://gcore.jsdelivr.net/gh/ccknbc-backup/cdn/image/pwa/192.png",
            action_buttons: [{"title": "前往查看", "url": newPostLocal.url},{"title":"状态页面", "url": "https://cc.instatus.com"}]
        };
        console.log(payload);
        var headers = {
            webpushrKey: "19e7fc04388c7dd68a5926d7326f3bea",
            webpushrAuthToken: "16778",
            "Content-Type": "application/json"
        };
        var options = {
            url: 'https://api.webpushr.com/v1/notification/send/segment',
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        };
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                hexo.log.info(newPostLocal.title+" 推送更新成功");
                hexo.log.info(body);
            }
            else {
                hexo.log.error(newPostLocal.title +" 推送更新失败");
                hexo.log.error(body);
            }
        }
        hexo.log.info(JSON.stringify(payload))
        request(options, callback);

    } else {
        hexo.log.info("无文章更新");
    }
});

//insert webpushr tracking code
hexo.extend.filter.register("after_render:html", (data) => {
    var payload = `(function(w,d, s, id) {if(typeof(w.webpushr)!=='undefined') return;w.webpushr=w.webpushr||function(){(w.webpushr.q=w.webpushr.q||[]).push(arguments)};var js, fjs = d.getElementsByTagName(s)[0];js = d.createElement(s); js.id = id;js.async=1;js.src = "https://cdn.webpushr.com/app.min.js";
                    fjs.parentNode.appendChild(js);}(window,document, 'script', 'webpushr-jssdk'));
                    webpushr('setup',{'key':'BB9Y-w9p3u0CKA7UP9nupB6I-_NqE2MuODmKJjyC4W2YflX06Ff_hEhrNJfonrut5l6gCa28gC83q2OII7Qv-oA' });
                    `;

    // return data.replace(/<body>(?!<\/body>).+?<\/body>/s, str => str.replace('</body>', "<script>"+decodeURI(payload)+"</script></body>"));
    return data.replace(/<body.+?>(?!<\/body>).+?<\/body>/s, (str) =>
        str.replace("</body>", "<script>" + decodeURI(payload) + "</script></body>")
    );
});

//insert webpushr-sw.js to web root dir
hexo.on("generateAfter", async function (post) {
    fs.writeFile(
        "public/webpushr-sw.js",
        "importScripts('https://cdn.webpushr.com/sw-server.min.js');",
        function (err, data) {
            hexo.log.info("Generated: webpushr-sw.js");
        }
    );
});
