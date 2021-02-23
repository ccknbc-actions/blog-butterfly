---
title: BKPP直播
description: BKPP直播
aside: false
comments: true
top_img: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-05~20_05_58.webp'
translate_title: live
date: 2020-10-05 20:01:26
---
<!-- {% note warning %} 视频存储与加速感谢阿里[teambition](https://www.teambition.com/)提供支持 {% endnote %} -->

{% note warning %} 2021年3月11日见，我本来以为没了，您可在本页面回顾全五集 {% endnote %}

<!-- <div id="dplayer-live"></div>
<script src="https://cdn.jsdelivr.net/npm/flv.js"></script>
<script src="https://cdn.jsdelivr.net/npm/hls.js"></script>
<script src="https://cdn.jsdelivr.net/gh/MoePlayer/DPlayer/dist/DPlayer.min.js"></script>
<script>
const dp_live = new DPlayer({
    container: document.getElementById('dplayer-live'),
    autoplay: false,
    theme: '#8fbc8f',
    preload: 'auto',
    volume: 1,
    mutex: true,
    live: false,
    screenshot: true,
    // danmaku: {
    //     id: 'CCKNBC-BKPPLIVEEP4',
    //     api: 'https://danmu.u2sb.top/api/danmu/dplayer/',
    // },
    video: {
        quality: [
            // {
            //     name: 'EP.5预告 临时',
            //     url: 'https://www.teambition.com/api/works/5fb32da9d3af53004488d6ee/download/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%20EP.5%20-%20%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%89%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%83%E0%B8%88%E0%B9%80%E0%B8%98%E0%B8%AD.mp4?signature=eyJhbGciOiJIUzI1NiJ9.eyJfd29ya0lkIjoiNWZiMzJkYTlkM2FmNTMwMDQ0ODhkNmVlIiwiZmlsZUtleSI6IjMzMXo5YjlmOWE5ZWVkN2M2MGQ3NDNjZjk2NmY5OGZmNjVjNiIsIl91c2VySWQiOiI1ZjY3ZWMwNWYyYmIxNTAwNTg3MWFkY2UiLCJleHAiOjE2MDU5MjQ3NzksInN0b3JhZ2UiOiJzdHJpa2VyLWh6In0.s5cWHI6pOUgt_F9qizc4nPrFNI-rpqLm2goRoQs8-2A&_versionId=5fb32da9d3af53004488d6ef',
            //     type: 'auto',
            // },
            // {
            //     name: 'LINE TV 1080P',
            //     url: 'https://livecloud.akamaized.net/linetv/lip2_sg/snmssgpu0001e1/ekvgvxawnxi3l8h8fzrskntpad7mknfmlu/hdntl=exp=1605823129~acl=*%2fekvgvxawnxi3l8h8fzrskntpad7mknfmlu%2f*~data=hdntl~hmac=ce4abf7d78a51cb2c61eff503f56ab9023e22b8459e576ceb53612ab3d868229/chunklist_1080l.m3u8?hdnts=st=1605790621~exp=1605823021~acl=*/ekvgvxawnxi3l8h8fzrskntpad7mknfmlu/*~hmac=c11adef354e45de15d67e1b05e678efee5877b02662f4ae8fab927dad63b2454',
            //     type: 'auto',
            // },
            // {
            //     name: '天府 1080P',
            //     url: 'https://hw-flv.yy.com/live/15013_xv_1382648421_1382648421_0_0_0-15013_xa_1382648421_1382648421_0_0_0-0-0-2-10682481-32-1605787806481095.flv?codec=orig&appid=15013&secret=0b29c12b85b2767209234bb59970311c&t=1605792260&r=enter&playeruid=2104730406',
            //     type: 'auto',
            // },
            // {
            //     name: '确认后再切换',
            //     url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
            //     type: 'auto',
            // },
            {
                name: '等待时间动画',
                url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                type: 'auto',
            },
            {
                name: '天府EP.1',
                url: 'https://od.ccknbc.cc/bkpp/%E5%89%A7%E9%9B%86/Part1/EP.1/%E5%A4%A9%E5%BA%9C%E6%B3%B0%E5%89%A7%E5%AD%97%E5%B9%95%E7%BB%84/%E4%BB%A5%E4%BD%A0%E7%9A%84%E5%BF%83%E8%AF%A0%E9%87%8A%E6%88%91%E7%9A%84%E7%88%B1%20EP1%201080P.mp4',
                type: 'auto',
            },
            {
                name: '喜翻EP.1',
                url: 'https://od.ccknbc.cc/bkpp/%E5%89%A7%E9%9B%86/Part1/EP.1/%E5%96%9C%E7%BF%BB%E8%AF%91%E5%88%B6%E7%BB%84/%E6%B3%B0%E5%89%A7%E3%80%8A%E4%B8%80%E5%BF%83%E4%B8%80%E8%AF%91%E3%80%8B%E7%AC%AC01%E9%9B%86%E4%B8%AD%E5%AD%97%E7%89%88%40%E5%96%9C%E7%BF%BB%E8%AF%91%E5%88%B6%E7%BB%84.mp4',
                type: 'auto',
            },
            {
                name: '天府EP.2',
                url: 'https://od.ccknbc.cc/bkpp/%E5%89%A7%E9%9B%86/Part1/EP.2/%E5%A4%A9%E5%BA%9C%E6%B3%B0%E5%89%A7%E5%AD%97%E5%B9%95%E7%BB%84/%E4%BB%A5%E4%BD%A0%E7%9A%84%E5%BF%83%E8%AF%A0%E9%87%8A%E6%88%91%E7%9A%84%E7%88%B1%20EP2%201080P.mp4',
                type: 'auto',
            },
            {
                name: '喜翻EP.2',
                url: 'https://od.ccknbc.cc/bkpp/%E5%89%A7%E9%9B%86/Part1/EP.2/%E5%96%9C%E7%BF%BB%E8%AF%91%E5%88%B6%E7%BB%84/%E6%B3%B0%E5%89%A7%E3%80%8A%E4%B8%80%E5%BF%83%E4%B8%80%E8%AF%91%E3%80%8B%E7%AC%AC02%E9%9B%86%E4%B8%AD%E5%AD%97%E7%89%88%40%E5%96%9C%E7%BF%BB%E8%AF%91%E5%88%B6%E7%BB%84.mp4',
                type: 'auto',
            },
            {
                name: '天府EP.3',
                url: 'https://od.ccknbc.cc/bkpp/%E5%89%A7%E9%9B%86/Part1/EP.3/%E5%A4%A9%E5%BA%9C%E6%B3%B0%E5%89%A7%E5%AD%97%E5%B9%95%E7%BB%84/%E4%BB%A5%E4%BD%A0%E7%9A%84%E5%BF%83%E8%AF%A0%E9%87%8A%E6%88%91%E7%9A%84%E7%88%B1%20EP3%201080P.mp4',
                type: 'auto',
            },
            {
                name: '喜翻EP.3',
                url: 'https://od.ccknbc.cc/bkpp/%E5%89%A7%E9%9B%86/Part1/EP.3/%E5%96%9C%E7%BF%BB%E8%AF%91%E5%88%B6%E7%BB%84/%E6%B3%B0%E5%89%A7%E3%80%8A%E4%B8%80%E5%BF%83%E4%B8%80%E8%AF%91%E3%80%8B%E7%AC%AC03%E9%9B%86%E4%B8%AD%E5%AD%97%E7%89%88%40%E5%96%9C%E7%BF%BB%E8%AF%91%E5%88%B6%E7%BB%84.mp4',
                type: 'auto',
            },
            {
                name: '天府EP.4',
                url: 'https://od.ccknbc.cc/bkpp/%E5%89%A7%E9%9B%86/Part1/EP.4/%E5%A4%A9%E5%BA%9C%E6%B3%B0%E5%89%A7%E5%AD%97%E5%B9%95%E7%BB%84/%E4%BB%A5%E4%BD%A0%E7%9A%84%E5%BF%83%E8%AF%A0%E9%87%8A%E6%88%91%E7%9A%84%E7%88%B1%20EP4%201080P.mp4',
                type: 'auto',
            },
            {
                name: '喜翻EP.4',
                url: 'https://od.ccknbc.cc/bkpp/%E5%89%A7%E9%9B%86/Part1/EP.4/%E5%96%9C%E7%BF%BB%E8%AF%91%E5%88%B6%E7%BB%84/%E6%B3%B0%E5%89%A7%E3%80%8A%E4%B8%80%E5%BF%83%E4%B8%80%E8%AF%91%E3%80%8B%E7%AC%AC04%E9%9B%86%E4%B8%AD%E5%AD%97%E7%89%88%40%E5%96%9C%E7%BF%BB%E8%AF%91%E5%88%B6%E7%BB%84.mp4',
                type: 'auto',
            },
            {
                name: '天府EP.5',
                url: 'https://od.ccknbc.cc/bkpp/%E5%89%A7%E9%9B%86/Part1/EP.5%28Final%29/%E5%A4%A9%E5%BA%9C%E6%B3%B0%E5%89%A7%E5%AD%97%E5%B9%95%E7%BB%84/%E4%BB%A5%E4%BD%A0%E7%9A%84%E5%BF%83%E8%AF%A0%E9%87%8A%E6%88%91%E7%9A%84%E7%88%B1%20EP5%201080P.mp4',
                type: 'auto',
            },
            {
                name: '喜翻EP.5',
                url: 'https://od.ccknbc.cc/bkpp/%E5%89%A7%E9%9B%86/Part1/EP.5%28Final%29/%E5%96%9C%E7%BF%BB%E8%AF%91%E5%88%B6%E7%BB%84/%E6%B3%B0%E5%89%A7%E3%80%8A%E4%B8%80%E5%BF%83%E4%B8%80%E8%AF%91%E3%80%8B%E7%AC%AC05%E9%9B%86%E4%B8%AD%E5%AD%97%E7%89%88%40%E5%96%9C%E7%BF%BB%E8%AF%91%E5%88%B6%E7%BB%84.mp4',
                type: 'auto',
            },           
        ],
        defaultQuality: 0,
        pic: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-10-05~20_05_58.webp',
    },
});
</script></br> -->
<!-- </br>
<div class="artplayer-app" style="width:100%;height:480px;center"></div>
        <script src="https://cdn.jsdelivr.net/npm/artplayer/dist/artplayer.js"></script>
        <script>
            var art = new Artplayer({
            container: '.artplayer-app',
            // url: 'https://file.nmb.show/down.php/86c301fbc6183f50fb0487e13e5a1f64.mp4',
            // url: 'https://www.teambition.com/api/works/5fb28808d902bb00449d62fa/download/Three%20Man%20Down%20(The%20Remake)%20-%20%E0%B8%99%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%9A.mp4?signature=eyJhbGciOiJIUzI1NiJ9.eyJfd29ya0lkIjoiNWZiMjg4MDhkOTAyYmIwMDQ0OWQ2MmZhIiwiZmlsZUtleSI6IjMzMXphMWU4NjgxNTIxMmE4ZDE1YTMyYmI1MzhmODQ1MWEwYiIsIl91c2VySWQiOiI1ZjY3ZWMwNWYyYmIxNTAwNTg3MWFkY2UiLCJleHAiOjE2MDU3MDg1NjMsInN0b3JhZ2UiOiJzdHJpa2VyLWh6In0.HwlyMLpvm5KlRbdeKPQj3ZJ2nGGJJ-k74yZAzpYFHDA&_versionId=5fb28808d902bb00449d62fb',
            url: 'https://www.teambition.com/api/works/5fb32da9d3af53004488d6ee/download/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%20EP.5%20-%20%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%89%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%83%E0%B8%88%E0%B9%80%E0%B8%98%E0%B8%AD.mp4?signature=eyJhbGciOiJIUzI1NiJ9.eyJfd29ya0lkIjoiNWZiMzJkYTlkM2FmNTMwMDQ0ODhkNmVlIiwiZmlsZUtleSI6IjMzMXo5YjlmOWE5ZWVkN2M2MGQ3NDNjZjk2NmY5OGZmNjVjNiIsIl91c2VySWQiOiI1ZjY3ZWMwNWYyYmIxNTAwNTg3MWFkY2UiLCJleHAiOjE2MDU3NTEzNjgsInN0b3JhZ2UiOiJzdHJpa2VyLWh6In0.AQLXy-t1BzdoWJS3tfnLBSKhM86KhOPO3tsm1OPzET8&_versionId=5fb32da9d3af53004488d6ef',
            title: '夜不能寐',
            poster: 'https://img.gejiba.com/images/53a01f7d9962c75dd78fda615a0bc7dd.jpg',
            volume: 1,
            isLive: false,
            muted: false,
            autoplay: false,
            pip: true,
            autoSize: true,
            autoMini: true,
            screenshot: false,
            setting: true,
            loop: false,
            flip: true,
            rotate: true,
            playbackRate: true,
            aspectRatio: true,
            fullscreen: true,
            fullscreenWeb: true,
            subtitleOffset: true,
            miniProgressBar: true,
            localVideo: true,
            localSubtitle: true,
            networkMonitor: false,
            mutex: true,
            light: true,
            backdrop: true,
            theme: '#8fbc8f',
            lang: navigator.language.toLowerCase(),
            // subtitle: {
            //     url: 'https://cdn.jsdelivr.net/gh/ccknbc-backup/photos/blog/2020-11-09~10_24_06.srt',
            //     style: {
            //         color: 'rgb(92, 184, 92)',
            //         'font-size': '30px',
            //     },
            //     encoding: 'utf-8',
            //     bilingual: true,
            // },
            quality: [
        {
            default: true,
            name: '第5集预告 4K',
            url: 'https://www.teambition.com/api/works/5fb32da9d3af53004488d6ee/download/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%20EP.5%20-%20%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%89%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%83%E0%B8%88%E0%B9%80%E0%B8%98%E0%B8%AD.mp4?signature=eyJhbGciOiJIUzI1NiJ9.eyJfd29ya0lkIjoiNWZiMzJkYTlkM2FmNTMwMDQ0ODhkNmVlIiwiZmlsZUtleSI6IjMzMXo5YjlmOWE5ZWVkN2M2MGQ3NDNjZjk2NmY5OGZmNjVjNiIsIl91c2VySWQiOiI1ZjY3ZWMwNWYyYmIxNTAwNTg3MWFkY2UiLCJleHAiOjE2MDU3NTEzNjgsInN0b3JhZ2UiOiJzdHJpa2VyLWh6In0.AQLXy-t1BzdoWJS3tfnLBSKhM86KhOPO3tsm1OPzET8&_versionId=5fb32da9d3af53004488d6ef',
        },
        {
            name: '天府第4集 4K',
            url: 'https://www.teambition.com/api/works/5fb280631ff34d004481c19d/download/%E4%BB%A5%E4%BD%A0%E7%9A%84%E5%BF%83%E8%AF%A0%E9%87%8A%E6%88%91%E7%9A%84%E7%88%B1%20EP4%204K.mp4?signature=eyJhbGciOiJIUzI1NiJ9.eyJfd29ya0lkIjoiNWZiMjgwNjMxZmYzNGQwMDQ0ODFjMTlkIiwiZmlsZUtleSI6IjMzMXoyZTAwNTI4ZjRlYzFkMDJkMzM5YzI3MDVlNWZhNjM0YSIsIl91c2VySWQiOiI1ZjY3ZWMwNWYyYmIxNTAwNTg3MWFkY2UiLCJleHAiOjE2MDU3NTEyMzQsInN0b3JhZ2UiOiJzdHJpa2VyLWh6In0.RrxyoCf6FlchkNlv_TWxKtsJ7t4c6yDcqAfXmHOvOdU&_versionId=5fb280631ff34d004481c19e',
        },
    ],
        });
        </script>
使用第二个播放器请切换浏览器UA为电脑版，以获得完整功能（比如画中画） -->

<!-- <iframe src="https://chat.getloli.com/room/@bkpp?title=BKPP直播聊天" scrolling="no" frameborder="0"  width="100%" height="auto"></iframe> -->

<!-- {% note success %} 周四晚间9点记得刷新网页收看直播，这里不开启弹幕，因为就十来人专心看算了，并提供官方直播线路和天府直播线路供大家切换，如果本页面观看不畅，您可刷新后重试，等待期间您可回顾第4集内容或听听OST {% endnote %}

<div class="btn-center">
{% btn 'https://tv.line.me/special/live/4086',第5集官方直播页面（泰国IP）,far fa-hand-point-right,outline green larger %}
</div> -->
<!-- ## 网易(有歌词翻译) -->
<!-- {% mmedia "meting" "5321262221" "netease" "playlist" "mutex:true" "preload:auto" "theme:#8fbc8f" "volume:1" %} -->

{% mmedia "meting" "server=netease"	"type=playlist" "id=5321262221" %}