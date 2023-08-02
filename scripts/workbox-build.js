const workboxBuild = require('workbox-build');
const UglifyJS = require('uglify-js');
const fs = require('hexo-fs');

hexo.on("deployBefore", async function () {
    const buildSW = async () => {
        try {
            const { count, size, warnings } = await workboxBuild.injectManifest({
                swSrc: './scaffolds/workbox/workbox-sw.js',
                swDest: './public/sw.js',
                globDirectory: './public/',
                globPatterns: ['offline/index.html'],
                modifyURLPrefix: {
                    '': './'
                }
            });

            const sizeInKB = (size / 1024).toFixed(2);
            warnings.forEach(console.warn);
            hexo.log.info("已自动生成: sw.js");
            hexo.log.info(`${count} 个文件将被预缓存，预计占用 ${sizeInKB} kb`);

            // 检查文件是否存在
            const swFilePath = './public/sw.js';
            if (!fs.existsSync(swFilePath)) {
                hexo.log.warn("sw.js 文件不存在，请检查路径是否正确。");
                return;
            }

            // 读取生成的 sw.js 文件内容
            const swFile = fs.readFileSync(swFilePath);

            // 压缩代码
            const result = UglifyJS.minify(swFile.toString());
            if (result.error) {
                hexo.log.warn("压缩代码时发生错误：", result.error);
                return;
            }

            // 将压缩后的代码写回文件
            fs.writeFileSync(swFilePath, result.code);
            hexo.log.info("sw.js 文件已压缩并覆盖写入");
        } catch (error) {
            hexo.log.warn("发生错误：", error);
        }
    };
    await buildSW();
});
