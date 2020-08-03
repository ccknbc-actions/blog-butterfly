var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');
var workbox = require("workbox-build");
// babel
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
//tester
// var uglifyjs = require("terser");
// var composer = require('gulp-uglify/composer');
// var pump = require('pump');
// var minify = composer(uglifyjs, console);

//pwa
gulp.task('generate-service-worker', () => {
  return workbox.injectManifest({
    swSrc: './sw-template.js',
    swDest: './public/sw.js',
    globDirectory: './public/posts',
    globPatterns: [
      "**/*.{css,js,json,woff2}"
    ],
    modifyURLPrefix: {
      "": "./"
    }
  });
});

//minify js babel
gulp.task('compress', () =>
  gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
    .pipe(uglify().on('error', function(e){
      console.log(e);
    }))
        .pipe(gulp.dest('./public'))
);

//minify js tester
// gulp.task('compress', function (cb) {
//   var options = {};
//   pump([
//     gulp.src(['./public/**/*.js', '!./public/**/*.min.js']),
//     minify(options),
//     gulp.dest('./public')
//   ],
//   cb
//   );
// });

//css
gulp.task('minify-css', () => {
  return gulp.src('./public/**/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie11'
    }))
    .pipe(gulp.dest('./public'));
});


// 壓縮 public 目錄內 html
gulp.task('minify-html', () => {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
      removeComments: true, //清除 HTML 註釋
      collapseWhitespace: true, //壓縮 HTML
      collapseBooleanAttributes: true, //省略布爾屬性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true, //刪除所有空格作屬性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true, //刪除 <script> 的 type="text/javascript"
      removeStyleLinkTypeAttributes: true, //刪除 <style> 和 <link> 的 type="text/css"
      minifyJS: true, //壓縮頁面 JS
      minifyCSS: true, //壓縮頁面 CSS
      minifyURLs: true
    }))
    .pipe(gulp.dest('./public'))
});

// 壓縮 public/uploads 目錄內圖片
gulp.task('minify-images', async () => {
  gulp.src('./public/img/**/*.*')
    .pipe(imagemin({
      optimizationLevel: 5, //類型：Number  預設：3  取值範圍：0-7（優化等級）
      progressive: true, //類型：Boolean 預設：false 無失真壓縮jpg圖片
      interlaced: false, //類型：Boolean 預設：false 隔行掃描gif進行渲染
      multipass: false, //類型：Boolean 預設：false 多次優化svg直到完全優化
    }))
    .pipe(gulp.dest('./public/img'));
});

// 執行 gulp 命令時執行的任務
gulp.task("default", gulp.series("generate-service-worker", gulp.parallel(
    'compress','minify-html', 'minify-css', 'minify-images'
)));
