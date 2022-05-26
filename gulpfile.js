const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-html-minifier-terser');
const htmlclean = require('gulp-htmlclean');
// const uglify = require('gulp-uglify')
// const babel = require('gulp-babel')
const terser = require('gulp-terser');
const workbox = require("workbox-build");

// gulp.task('compress', () =>
//   gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
//     .pipe(babel({
//       presets: ['@babel/preset-env']
//     }))
//     .pipe(uglify().on('error', function (e) {
//       console.log(e)
//     }))
//     .pipe(gulp.dest('./public'))
// )

gulp.task('compress', () =>
  gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
    .pipe(terser())
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
    swSrc: './sw.js',
    swDest: './public/sw.js',
    globDirectory: './public',
    globPatterns: ['{index,404}.html'],
    modifyURLPrefix: {
        '': './'
    }
  }).then(({count, size, warnings}) => {
    //打印错误
    warnings.forEach(console.warn);
    console.log(`${count} 文件将被预缓存 共占用 ${size/1024} Kb`);
  });
});

// 执行 gulp 命令时执行的任务
gulp.task("default",gulp.series("generate-service-worker",gulp.parallel('compress','minify-css', 'minify-html')));