/*
 * @Author: CCKNBC ccknbc@qq.com
 * @Date: 2023-04-02 20:37:22
 * @LastEditors: CCKNBC ccknbc@qq.com
 * @LastEditTime: 2023-04-02 21:20:26
 * @FilePath: \Acrylic\scripts\events\welcome.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
hexo.on("ready", () => {
  const { version } = require("../../package.json");
  const logger = hexo.log;
  logger.info(`
  ===================================================================
                                                                     
   █████╗ ███╗   ██╗███████╗██╗  ██╗██╗██╗   ██╗██╗   ██╗
  ██╔══██╗████╗  ██║╚══███╔╝██║  ██║██║╚██╗ ██╔╝██║   ██║
  ███████║██╔██╗ ██║  ███╔╝ ███████║██║ ╚████╔╝ ██║   ██║
  ██╔══██║██║╚██╗██║ ███╔╝  ██╔══██║██║  ╚██╔╝  ██║   ██║
  ██║  ██║██║ ╚████║███████╗██║  ██║██║   ██║   ╚██████╔╝
  ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝    ╚═════╝

                            ${version}
  ===================================================================`);
});
