const workboxBuild = require('workbox-build');

hexo.on("deployBefore", async function () {
    const buildSW = () => {
        return workboxBuild.injectManifest({
            swSrc: './scaffolds/workbox/workbox-sw.js',
            swDest: './public/sw.js',
            globDirectory: './public/',
            globPatterns: ['*/*.css', 'js/*.js', 'offline/index.html'],
            modifyURLPrefix: {
                '': './'
            }
        }).then(({ count, size, warnings }) => {
            var size = (size/1024).toFixed(2)
            warnings.forEach(console.warn);
            hexo.log.info("已自动生成: sw.js");
            hexo.log.info(`${count} 个文件将被预缓存，预计占用 ${size} Kb`);
        });
    }
    buildSW();
})