var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier-terser');
var htmlclean = require('gulp-htmlclean');
var uglify = require('gulp-uglify')
var babel = require('gulp-babel')
var workbox = require("workbox-build");

gulp.task('compress', () =>
  gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify().on('error', function (e) {
      console.log(e)
    }))
    .pipe(gulp.dest('./public'))
)

gulp.task('minify-css', () => {
    return gulp.src(['./public/**/*.css'])
        .pipe(cleanCSS({
            compatibility: 'ie11'
        }))
        .pipe(gulp.dest('./public'));
});
      
gulp.task('minify-html', () => {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true, //清除 HTML 註释
            collapseWhitespace: true, //压缩 HTML
            collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true, //删除 <script> 的 type="text/javascript"
            removeStyleLinkTypeAttributes: true, //删除 <style> 和 <link> 的 type="text/css"
            minifyJS: true, //压缩页面 JS
            minifyCSS: true, //压缩页面 CSS
            minifyURLs: true
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('generate-service-worker', () => {
  return workbox.injectManifest({
    swSrc: './sw-template.js',
    swDest: './public/service-worker.js',
    globDirectory: './public',
    globPatterns: [
      "**/*.{css,js,woff2}",
      "index.html"
    ],
    modifyURLPrefix: {
        "": "./"
    }
  }).then(({count, size, warnings}) => {
    //打印错误
    warnings.forEach(console.warn);
    console.log(`${count} 文件将被预缓存 共占用 ${size} bytes.`);

  });
});

// 执行 gulp 命令时执行的任务
gulp.task("default", gulp.series("generate-service-worker", gulp.parallel(
  'compress','minify-css', 'minify-html'
)));