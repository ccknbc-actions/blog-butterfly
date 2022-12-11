const workboxBuild = require('workbox-build');

hexo.on('generateAfter', async function () {
    const buildSW = () => {
        // This will return a Promise
        return workboxBuild.injectManifest({
            swSrc: './sw-workbox.js',
            swDest: './public/sw.js',
            globDirectory: './public/',
            globPatterns: ['index.html','offline/index.html'],
            modifyURLPrefix: {
                '': './'
            }
        }).then(({ count, size, warnings }) => {
            //打印错误
            var size = (size/1024).toFixed(2)
            warnings.forEach(console.warn);
            hexo.log.info("已自动生成: sw.js");
            hexo.log.info(`${count} 文件将被预缓存，预计共占用 ${size} Kb`);
        });
    }

    buildSW();
})