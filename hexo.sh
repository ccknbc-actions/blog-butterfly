#!/bin/sh
#本脚本用于群友交流，完全开源，可以随意传阅，不过希望保留出处。
#来自 https://akilar.top 糖果屋

HexoPath=$(cd "$(dirname "$0")"; pwd)
cd ${HexoPath}
printf "\033[32m Blog 根目录："${HexoPath}"\033[0m"
echo " "
echo "[0] 退出菜单"
echo "=============以下功能需要在空文件夹内使用================"
echo "[1] 初始化安装Hexo（仅在第一次安装时使用）"
echo "[2] 从云端恢复Hexo（需要在脚本中配置仓库URL）"
echo "=============以下功能需要在Hexo文件夹内使用================"
echo "[3] 开启本地预览"
echo "[4] 重新编译后开启本地预览（修改过_config.yml需使用这个才能看到变化）"
echo "[5] 部署页面到博客网站"
echo "[6] 从远程仓库拉取最新版本（需要在脚本中配置仓库URL）"
echo "[7] 提交本地修改到远程仓库"
echo "[8] 升级Hexo及插件（慎用）"
echo "[9] 安装butterfly主题"
echo "[10] 安装volantis主题"
echo "[11] 安装Hexo-Admin(用于管理或撰写Hexo博文，适合初学者使用)"
echo "=============以下功能为全局指令================"
echo "[12] 安装ssh密钥"
echo "[13] 验证ssh密钥"
echo " "
printf "请选择需要的功能，默认选择[3] 开启本地预览"
echo " "
printf "选择："
read answer

if [ "$answer" = "1" ]; then
printf "\033[32mINFO \033[0m 正在为您创建Hexo文件夹 ...\n"
mkdir Hexo
cd Hexo
printf "\033[32mINFO \033[0m 正在将npm源替换为阿里云镜像 ...\n"
npm config set registry https://registry.npm.taobao.org # 替换NPM源为阿里镜像
printf "\033[32mINFO \033[0m 正在为您全局安装Hexo命令集...\n"
npm install -g hexo-cli
printf "\033[32mINFO \033[0m 即将为您开始Hexo初始化安装...\n"
hexo init
printf "\033[32mINFO \033[0m 正在为您安装必要依赖...\n"
npm install --save
npm install hexo-deployer-git --save
printf "\033[32mINFO \033[0m 请查看您当前的Hexo版本...\n"
hexo version
printf "\033[32mINFO \033[0m 安装完成，您可以开始您的Hexo之旅了！\n"
printf "\033[32mINFO \033[0m 请将本脚本文件放入Hexo文件夹以继续使用其他功能！\n"
sleep 5s
printf "\033[32mINFO \033[0m 请将本脚本文件放入Hexo文件夹以继续使用其他功能！\n"
sleep 5s
printf "\033[32mINFO \033[0m 请将本脚本文件放入Hexo文件夹以继续使用其他功能！\n"
sleep 5s
exit 0
else
if [ "$answer" = "2" ]; then
printf "\033[32mINFO \033[0m 正在从Github拉取博客源码 ...\n"
git clone https://github.com/ccknbc-actions/blog-butterfly.git Blog # 记得替换仓库URL为自己的源码存放仓库
cd Hexo
printf "\033[32mINFO \033[0m 正在将npm源替换为阿里云镜像 ...\n"
npm config set registry https://registry.npm.taobao.org # 替换NPM源为阿里镜像
printf "\033[32mINFO \033[0m Hexo恢复中...\n"
npm install -g hexo-cli
# npm install gulp-cli -g #全局安装gulp，未配置不用开启
npm install --save
printf "\033[32mINFO \033[0m 恢复完成，您可以开始您的Hexo之旅了！\n"
printf "\033[32mINFO \033[0m 请将本脚本文件放入Hexo文件夹以继续使用其他功能！\n"
sleep 5s
printf "\033[32mINFO \033[0m 请将本脚本文件放入Hexo文件夹以继续使用其他功能！\n"
sleep 5s
printf "\033[32mINFO \033[0m 请将本脚本文件放入Hexo文件夹以继续使用其他功能！\n"
sleep 5s
exit 0
else
if [ "$answer" = "3" ] || [ "$answer" = "" ]; then
printf "\033[32mINFO \033[0m 正在清理本地缓存...\n"
hexo clean
printf "\033[32mINFO \033[0m 正在启动本地预览，可以按Ctrl+C退出\n"
hexo server
exec ${HexoPath}/hexo.sh
else
if [ "$answer" = "4" ]; then
printf "\033[32mINFO \033[0m 正在清理本地缓存...\n"
hexo clean
# printf "\033[32mINFO \033[0m 正在更新番剧列表...\n"
# hexo bangumi -u #bilibili追番插件，未配置无需开启
printf "\033[32mINFO \033[0m 正在重新编译静态页面...\n"
hexo generate
printf "\033[32mINFO \033[0m 正在压缩静态资源...\n"
# gulp #gulp插件，未配置无需开启
printf "\033[32mINFO \033[0m 正在开启本地预览，可以按Ctrl+C退出\n"
hexo server
exec ${HexoPath}/hexo.sh
else
if [ "$answer" = "5" ]; then
printf "\033[32mINFO \033[0m 正在清理本地缓存...\n"
hexo clean
# printf "\033[32mINFO \033[0m 正在更新番剧列表...\n"
# hexo bangumi -u #bilibili追番插件，未配置无需开启
printf "\033[32mINFO \033[0m 正在重新编译静态页面...\n"
hexo generate
printf "\033[32mINFO \033[0m 正在压缩静态资源...\n"
gulp #gulp插件，未配置无需开启
printf "\033[32mINFO \033[0m 正在准备将最新修改部署至Hexo...\n"
hexo deploy
printf "\033[32mINFO \033[0m 部署完成，您的网站已经是最新版本！\n"
sleep 1s
exec ${HexoPath}/hexo.sh
else
if [ "$answer" = "6" ]; then
printf "\033[32mINFO \033[0m 正在从远程仓库拉取最新版本...\n"
git pull origin master #2020年10月后github新建仓库默认分支改为main，注意更改
printf "\033[32mINFO \033[0m 拉取完毕，您的博客已是最新版本！\n"
sleep 1s
exec ${HexoPath}/hexo.sh
else
if [ "$answer" = "7" ]; then
printf "\033[32mINFO \033[0m 正在删除本地缓存...\n"
hexo clean
# printf "\033[32mINFO \033[0m 正在删除语雀缓存...\n"
# yuque-hexo clean
printf "\033[32mINFO \033[0m 正在提交最新修改到远程仓库...\n"
git add .
git commit -m "Update posts content"
git push origin master -f #2020年10月后github新建仓库默认分支改为main，注意更改
printf "\033[32mINFO \033[0m 提交完毕，您的修改已上传至远程仓库！\n"
sleep 1s
exec ${HexoPath}/hexo.sh



else
if [ "$answer" = "8" ]; then
printf "\033[32mINFO \033[0m 请先确认当前版本 ...\n"
hexo version
sleep 3s
printf "\033[32mINFO \033[0m 即将为您全局升级hexo-cli...\n"
npm install hexo-cli -g
printf "\033[32mINFO \033[0m hexo-cli升级完成，请查看当前版本。\n"
hexo version
sleep 3s
printf "\033[32mINFO \033[0m 即将为您升级npm-check...\n"
npm install -g npm-check
printf "\033[32mINFO \033[0m npm-check升级完成！\n"
printf "\033[32mINFO \033[0m 正在使用npm-check检查系统是否有可升级插件...\n"
npm-check
sleep 3s
printf "\033[32mINFO \033[0m 即将为您升级npm-upgrade...\n"
npm install -g npm-upgrade
printf "\033[32mINFO \033[0m 正在使用npm-upgrade升级插件...\n"
printf "\033[32mINFO \033[0m 您可以在接下来的过程中主动选择是否升级插件\n"
npm-upgrade
sleep 1s
printf "\033[32mINFO \033[0m 正在为您保存升级结果...\n"
npm update -g
npm update --save
printf "\033[32mINFO \033[0m 恭喜您，您的Hexo已经是最新版本\n"
sleep 2s
exec ${HexoPath}/hexo.sh
else
if [ "$answer" = "9" ]; then
printf "\033[32mINFO \033[0m 正在为您下载最新稳定版butterfly主题 ...\n"
git clone -b master https://gitee.com/iamjerryw/hexo-theme-butterfly.git themes/butterfly
printf "\033[32mINFO \033[0m 正在为您安装必要依赖！\n"
npm install hexo-renderer-pug hexo-renderer-stylus --save
printf "\033[32mINFO \033[0m 安装完成，感谢您对butterfly的支持！\n"
sleep 1s
printf "\033[32mINFO \033[0m 请在/Hexo/_config.yml中将theme修改为butterfly以激活主题！\n"
sleep 3s
exec ${HexoPath}/hexo.sh
else
if [ "$answer" = "10" ]; then
printf "\033[32mINFO \033[0m 正在为您下载最新稳定版volantis主题 ...\n"
git clone https://github.com/volantis-x/hexo-theme-volantis themes/volantis
printf "\033[32mINFO \033[0m 正在安装本地搜索必要依赖！\n"
npm install hexo-generator-search --save
npm install hexo-generator-json-content --save
printf "\033[32mINFO \033[0m 正在安装页面渲染必要依赖！\n"
npm install hexo-renderer-stylus --save
printf "\033[32mINFO \033[0m 安装完成，感谢您对volantis的支持！\n"
sleep 1s
printf "\033[32mINFO \033[0m 请在/Hexo/_config.yml中将theme修改为volantis以激活主题！\n"
sleep 3s
exec ${HexoPath}/hexo.sh
else
if [ "$answer" = "11" ]; then
printf "\033[32mINFO \033[0m 正在为您下载Hexo-Admin插件 ...\n"
npm install hexo-admin --save
printf "\033[32mINFO \033[0m 安装完成，即将为您启动本地预览！\n"
printf "\033[32mINFO \033[0m 请访问 http://localhost:4000/admin/ 进行博文编辑！\n"
sleep 2s
hexo server
sleep 1s
exec ${HexoPath}/hexo.sh

else
if [ "$answer" = "12" ]; then
printf "\033[32mINFO \033[0m 正在重新设置github global config...\n"
git config --global user.name "ccknbc" # 记得替换用户名为自己的
git config --global user.email "zekangsun@outlook.com" # 记得替换邮箱为自己的
ssh-keygen -t rsa -C zekangsun@outlook.com # 记得替换邮箱为自己的
printf "\033[32mINFO \033[0m 即将打开sshkey，复制后可按 Ctrl+D 返回...\n"
sleep 2s
less ~/.ssh/id_rsa.pub
printf "\033[32mINFO \033[0m 配置完成，请将sshkey添加到Github！\n"
sleep 1s
exec ${HexoPath}/hexo.sh
else
if [ "$answer" = "13" ]; then
printf "\033[32mINFO \033[0m 正在验证SSHkey是否配置成功 ...\n"
ssh -T git@github.com
printf "\033[32mINFO \033[0m 验证完毕，您的SSHkey已成功绑定至Github！\n"
sleep 1s
exec ${HexoPath}/hexo.sh

else
if [ "$answer" = "0" ]; then
printf "\033[32mINFO \033[0m 欢迎下次光临！\n"
sleep 1s
exit 0
else
printf "\033[31mERROR \033[0m 输入错误，请返回重新选择...\n"
sleep 1s
exec ${HexoPath}/hexo.sh
fi
fi
fi
fi
fi
fi
fi
fi
fi
fi
fi
fi
fi
fi
