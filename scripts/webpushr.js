/* global hexo */
/* eslint no-param-reassign:0, strict:0 */
'use strict';

const fs = require('hexo-fs');
const fetch = require("node-fetch");
const url = require("url");


// triggered after hexo generate.
// this output the newPost.json into public/.
hexo.on('generateAfter', async function (post) {
    var posts = hexo.locals.get('posts').data
    var dateSortedPosts = posts.sort(function (a, b) { return b.date - a.date }).map(function (v) { return v })
    var newPost = dateSortedPosts[0]
    var JSONFeed = {
        'title': newPost.title,
        'id': newPost.path,
        'updated': newPost.updated.format('L'),
        'message': newPost.description,
        'target_url': newPost.permalink,
        'icon': 'https://gcore.jsdelivr.net/gh/ccknbc-backup/cdn/logo/logo.png',
        'badge': 'https://gcore.jsdelivr.net/gh/ccknbc-backup/cdn/logo/logo.png',
        'image': newPost.cover,
        'auto_hide': '1'
    }
    fs.writeFile('public/newPost.json', JSON.stringify(JSONFeed), function (err, data) { hexo.log.info("Generated: newPost.json") })
})

//triggered before hexo deploy.
//it compare the newPost.json from your site and local to decide whether push the notification.
hexo.on("deployBefore", async function (post) {
    // Get newPost.json from your site.
    var newPostOnlineSite = await fetch(url.resolve(hexo.config.url, "newPost.json"));
    var newPostOnlineSite = await newPostOnlineSite.json();
    newPostOnlineSite = JSON.parse(JSON.stringify(newPostOnlineSite));
    // Get newPost.json from your local.
    var newPostLocal = await fs.readFileSync('public/newPost.json')
    // Get newPost.json from local
    newPostLocal = JSON.parse(newPostLocal);
    // console.table({
    //     "From online site": newPostOnlineSite,
    //     "From Local": newPostLocal
    // });
    //determine whether to push web notification
    if (newPostOnlineSite.id != newPostLocal.id) {
        // push new Post notification
        var payload = {
            title: newPostLocal.title,
            message: newPostLocal.summary,
            target_url: new URL(newPostLocal.url).pathname
        };
        console.log(payload)
        const response = await fetch(
            "https://app.webpushr.com/api/v1/notification/send/all",
            {
                method: "POST",
                headers: {
                    webpushrKey: "19e7fc04388c7dd68a5926d7326f3bea",
                    webpushrAuthToken: "16778",
                    // webpushrKey: hexo.config.webPushNotification.webpushrKey,
                    // webpushrAuthToken: hexo.config.webPushNotification.webpushrAuthToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }
        );
        const data = await response.json();
        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            hexo.log.error("Push Notification failed " + JSON.stringify(data));
        } else {
            hexo.log.info("Successfully push notification");
        }
    } else {
        hexo.log.info("No New Post detected.");
    }
})

//insert webpushr tracking code
hexo.extend.filter.register('after_render:html', data => {
    var payload = `(function(w,d, s, id) {if(typeof(w.webpushr)!=='undefined') return;w.webpushr=w.webpushr||function(){(w.webpushr.q=w.webpushr.q||[]).push(arguments)};var js, fjs = d.getElementsByTagName(s)[0];js = d.createElement(s); js.id = id;js.async=1;js.src = "https://cdn.webpushr.com/app.min.js";
                    fjs.parentNode.appendChild(js);}(window,document, 'script', 'webpushr-jssdk'));
                    webpushr('setup',{'key':'BB9Y-w9p3u0CKA7UP9nupB6I-_NqE2MuODmKJjyC4W2YflX06Ff_hEhrNJfonrut5l6gCa28gC83q2OII7Qv-oA' });
                    `

    // return data.replace(/<body>(?!<\/body>).+?<\/body>/s, str => str.replace('</body>', "<script>"+decodeURI(payload)+"</script></body>"));
    return data.replace(/<body.+?>(?!<\/body>).+?<\/body>/s, str => str.replace('</body>', "<script>" + decodeURI(payload) + "</script></body>"));

});

//insert webpushr-sw.js to web root dir
hexo.on('generateAfter', async function (post) {
    fs.writeFile('public/webpushr-sw.js', "importScripts('https://cdn.webpushr.com/sw-server.min.js');", function (err, data) { hexo.log.info("Generated: webpushr-sw.js") })
})
