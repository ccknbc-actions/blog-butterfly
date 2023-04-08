// CC的部落格 补充 JS

// 分享按钮
document.addEventListener("DOMContentLoaded", () => {
    /**
     * 复制指定文本
     * @param text {string} 要复制的文本
     */
    const copyText = (text) => {
        // `success`和`noSupport`分别是复制成功和失败时的操作
        // 如果你没有启用bf的弹窗，请自行修改代码

        // noinspection JSUnresolvedVariable
        const success = () => btf.snackbarShow(GLOBAL_CONFIG.copy.success);
        // noinspection JSUnresolvedVariable
        const noSupport = () => btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport);

        const commandCopy = () => {
            // noinspection JSDeprecatedSymbols
            if (
                document.queryCommandSupported &&
                document.queryCommandSupported("copy")
            ) {
                const input = document.createElement("p");
                if (navigator.userAgent.includes("Firefox")) input.textContent = text;
                else input.innerText = text;
                document.body.appendChild(input);
                const selection = getSelection();
                selection.removeAllRanges();
                const range = document.createRange();
                range.selectNodeContents(input);
                selection.addRange(range);
                // noinspection JSDeprecatedSymbols
                document.execCommand("copy");
                document.body.removeChild(input);
                selection.removeAllRanges();
                success();
            } else noSupport();
        };

        const clipboard = navigator.clipboard;
        if (clipboard) clipboard.writeText(text).then(success).catch(commandCopy);
        else commandCopy();
    };
    /** 获取要复制的文本，想要修改复制文本的格式的话在这里修改 */
    const getText = () => {
        // 获取当前页面的URL（不包含参数和hash）
        const url = location.protocol + "//" + location.host + location.pathname;
        return `${document.title}：\r\n${url}`;
    };
    document.getElementById("rightside").addEventListener("click", (event) => {
        const element = event.target.id ? event.target : event.target.parentNode;
        if (element?.id === "share-link") copyText(getText());
    });
});

// Algolia搜索

// searchSize();
// window.addEventListener('resize', searchSize)
// // 搜索窗口自适应
// function searchSize() {
//     // 只需要适应手机端
//     if (document.body.clientWidth > 768) return
//     let div = document.querySelector('#algolia-hits')
//     // 监听插入，如果有插入则根据可视高度动态设置最大高度
//     div.addEventListener('DOMNodeInserted', () => {
//         div.children[0].style.maxHeight = (document.documentElement.clientHeight - 210) + 'px'
//     })
// }

// 设置cookie
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

// 获取cookie
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}
