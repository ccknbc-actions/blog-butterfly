(() => {
    /** 检查 SW 是否可用 */
    const checkServiceWorker = () => 'serviceWorker' in navigator && navigator.serviceWorker.controller
    /** 发送信息到 sw */
    const postMessage2SW = type => navigator.serviceWorker.controller.postMessage(type)
    const pjaxUpdate = url => new Promise(resolve => {
        const type = url.endsWith('js') ? 'script' : 'link'
        const name = type.length === 4 ? 'href' : 'src'
        for (let item of document.querySelectorAll(type)) {
            const itUrl = item[name]
            if (url.length > itUrl ? url.endsWith(itUrl) : itUrl.endsWith(url)) {
                const newEle = document.createElement(type)
                const content = item.text || item.textContent || item.innerHTML || ''
                Array.from(item.attributes).forEach(attr => newEle.setAttribute(attr.name, attr.value))
                newEle.appendChild(document.createTextNode(content))
                item.parentNode.replaceChildren(newEle, item)
                return resolve(true)
            }
        }
        resolve(false)
    })
    const compareUrls = (arg0, arg1) => {
        if (
            (arg0.endsWith('/') && arg1.endsWith('/')) ||
            (arg0.endsWith('/index.html') && arg1.endsWith('/index.html'))
        ) {
            let count = 0
            for (let i = arg0.length - 1, k = arg1.length - 1; arg0[i] === arg1[k]; --i, --k) {
                if (arg0[i] === '/' && ++count === 2) return true
            }
        }
        return false
    }
    if (!checkServiceWorker()) return
    if (sessionStorage.getItem('updated')) {
        // ${onSuccess}
        sessionStorage.removeItem('updated')
    } else setTimeout(() => postMessage2SW('update'), 1000)
    navigator.serviceWorker.addEventListener('message', event => {
        const data = event.data
        switch (data.type) {
            case 'update':
                const list = data.update
                if (!list) break
                sessionStorage.setItem('updated', '1')
                // noinspection JSUnresolvedVariable,JSUnresolvedFunction
                if (Pjax?.isSupported()) {
                    Promise.all(list.map(url => {
                        if (url.endsWith('.js'))
                            return pjaxUpdate(url)
                        if (url.endsWith('.css'))
                            return pjaxUpdate(url)
                        return Promise.resolve(url.endsWith('.json') || compareUrls(url, location.href))
                    })).then(list => {
                        for (let it of list) {
                            if (it) return location.reload()
                        }
                        sessionStorage.removeItem('updated')
                        // ${onSuccess}
                    })
                } else location.reload()
                break
            case 'refresh':
                location.reload()
                break
        }
    })
})