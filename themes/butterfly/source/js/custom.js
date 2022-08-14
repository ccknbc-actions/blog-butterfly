// CC的部落格 补充 JS

// 分享按钮
document.addEventListener('DOMContentLoaded', () => {
    /**
     * 复制指定文本
     * @param text {string} 要复制的文本
     */
    const copyText = text => {
        // `success`和`noSupport`分别是复制成功和失败时的操作
        // 如果你没有启用bf的弹窗，请自行修改代码

        // noinspection JSUnresolvedVariable
        const success = () => btf.snackbarShow(GLOBAL_CONFIG.copy.success)
        // noinspection JSUnresolvedVariable
        const noSupport = () => btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport)

        navigator.clipboard.writeText(text).then(success).catch(() => {
            // noinspection JSDeprecatedSymbols
            if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
                const input = document.createElement('p')
                if (navigator.userAgent.indexOf('Firefox') < 0) input.innerText = text
                else input.textContent = text
                document.body.appendChild(input)
                const selection = getSelection()
                selection.removeAllRanges()
                const range = document.createRange()
                range.selectNodeContents(input)
                selection.addRange(range)
                // noinspection JSDeprecatedSymbols
                document.execCommand('copy')
                document.body.removeChild(input)
                selection.removeAllRanges()
                success()
            } else noSupport()
        })
    }
    /** 获取要复制的文本，想要修改复制文本的格式的话在这里修改 */
    const getText = () => {
        // 获取当前页面的URL（不包含参数和hash）
        const url = location.protocol + '//' + location.host + location.pathname
        return `${document.title}：\r\n${url}`
    }
    document.getElementById('share-link').onclick = () => copyText(getText())
})


// 随机访问文章
function randomPost() {
    fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
        let ls = data.querySelectorAll('url loc');
        while (true) {
            let url = ls[Math.floor(Math.random() * ls.length)].innerHTML;
            if (location.href == url) continue;
            location.href = url;
            return;
        }
    })
}



