HexoPath=$(cd "$(dirname "$0")"; pwd)
cd ${HexoPath}
printf "\033[32m Blog 根目录："${HexoPath}"\033[0m"

echo " "
echo "[0] 退出菜单"

echo " "
echo "====== 以下功能需要在空文件夹内使用 ======"
echo "[1] 从云端恢复 Hexo"

echo " "
echo "==== 以下功能需要在 Hexo 文件夹内使用 ===="
echo "[2] 开启本地预览"
echo "[3] Hexo 三连 后调试"
echo "[4] 升级 Hexo 及插件"
echo "[5] 升级 Butterfly 主题"
echo "[6] 升级 Anzhiyu 主题"
echo "[7] 从远程仓库拉取最新版本"
echo "[8] 提交本地修改到远程仓库"
echo "[9] 拉取语雀最新文章"

echo " "
printf "请选择需要的功能，默认选择 [2] 开启本地预览"
echo " "
printf "选择："
read answer

if [ "$answer" = "1" ]; then
printf "\033[32mINFO \033[0m 正在从Github拉取博客源码 ...\n"
git clone -b master it@github.com:ccknbc-actions/blog-butterfly.git Blog
cd Hexo
printf "\033[32mINFO \033[0m Hexo恢复中...\n"
npm install -g hexo-cli
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
if [ "$answer" = "2" ] || [ "$answer" = "" ]; then
printf "\033[32mINFO \033[0m 正在清理本地缓存...\n"
hexo clean
printf "\033[32mINFO \033[0m 正在启动本地预览，可以按Ctrl+C退出\n"
hexo server
exec ${HexoPath}/hexo.sh

else
if [ "$answer" = "3" ]; then
printf "\033[32mINFO \033[0m 正在清理本地缓存...\n"
hexo clean
printf "\033[32mINFO \033[0m 正在重新编译静态页面...\n"
hexo generate
printf "\033[32mINFO \033[0m 正在推送文章更新\n"
hexo deploy
printf "\033[32mINFO \033[0m 正在启动本地预览，可以按Ctrl+C退出\n"
hexo server
exec ${HexoPath}/hexo.sh

else
if [ "$answer" = "4" ]; then
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
npm-check -u
printf "\033[32mINFO \033[0m 您可以在接下来的过程中主动选择是否升级插件\n"
sleep 1s
printf "\033[32mINFO \033[0m 正在为您保存升级结果...\n"
npm update -g
npm update --save
printf "\033[32mINFO \033[0m 恭喜您，您的Hexo已经是最新版本\n"
sleep 2s
exec ${HexoPath}/hexo.sh

else
if [ "$answer" = "5" ]; then
cd themes/butterfly
printf "\033[32mINFO \033[0m 正在提交主题修改项至暂存区 ...\n"
git add -A
printf "\033[32mINFO \033[0m 提交一个 Commit！\n"
git commit -m "Update Hexo Theme Butterfly DEV"
printf "\033[32mINFO \033[0m 正在从远程拉取合并主题 dev 分支更新 ...\n"
printf "\033[32mINFO \033[0m 若自动打开编辑器进度暂停，请关闭编辑器以继续...\n"
git pull upstream dev --allow-unrelated-histories
printf "\033[32mINFO \033[0m 升级完成，感谢您对 Butterfly 的支持！\n"
sleep 1s
printf "\033[32mINFO \033[0m 若自动合并失败，请手动合并含有冲突未合并的文件！\n"
sleep 3s
exec ${HexoPath}/hexo.sh

else
if [ "$answer" = "6" ]; then
printf "\033[32mINFO \033[0m 正在升级 Anzhiyu 主题...\n"
npm update hexo-theme-anzhiyu
printf "\033[32mINFO \033[0m 升级完成，感谢您对 Anzhiyu 的支持！\n"
exec ${HexoPath}/hexo.sh

else
if [ "$answer" = "7" ]; then
printf "\033[32mINFO \033[0m 正在从远程仓库拉取最新版本...\n"
git pull origin master
printf "\033[32mINFO \033[0m 拉取完毕，您的博客已是最新版本！\n"
sleep 1s
exec ${HexoPath}/hexo.sh

else
if [ "$answer" = "8" ]; then
printf "\033[32mINFO \033[0m 正在删除本地缓存...\n"
hexo clean
printf "\033[32mINFO \033[0m 正在提交最新修改到远程仓库...\n"
git add .
git commit -m "Update By CC Locally"
git push origin master -f
printf "\033[32mINFO \033[0m 提交完毕，您的修改已上传至远程仓库！\n"
sleep 1s
exec ${HexoPath}/hexo.sh

else
if [ "$answer" = "9" ]; then
printf "\033[32mINFO \033[0m 正在拉取语雀最新文章 ...\n"
npm run local:yuque-token
printf "\033[32mINFO \033[0m 语雀最新文章拉取完毕，您可以开始预览！\n"
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
