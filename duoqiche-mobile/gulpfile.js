/**
 * Created by Administrator on 2016/7/18.
 */
var gulp = require('gulp'),
     rename = require('gulp-rename'),
     uglify = require('gulp-uglify'),
     jshint = require('gulp-jshint'),
     concat = require('gulp-concat'),
     notify = require('gulp-notify'),
     minifycss = require('gulp-minify-css'),
     autoprefixer = require('gulp-autoprefixer'),
     connect = require('gulp-connect'),
     clean = require('gulp-clean'),
     imagemin = require('gulp-imagemin'),
     sourcemaps = require('gulp-sourcemaps');


port = process.env.port || 8080;
gulp.task('connect',function(){
    connect.server({
        root:'',
        port:port,
        livereload:true
    })
});

gulp.task('js',function(){
    gulp.src([
        /*'bower_components/zepto/zepto.min.js',*/
      /*  'sui_components/js/!**!/!*.js',*/
        'client/js/**/*.js'
    ])
        .pipe(jshint())
       // .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(notify('js压缩合并完成。。'))
        .pipe(connect.reload())
});
gulp.task('css',function(){
    gulp.src([
        './sui_components/css/**/*.css',
        './client/css/**/*.css'
    ])
        .pipe(sourcemaps.init())
        .pipe(autoprefixer('last 6 version'))
        .pipe(concat('main.min.css'))
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(notify('css压缩完毕。。'))
        .pipe(connect.reload())
});
gulp.task('html',function(){
    gulp.src('views**/*.html')
        .pipe( connect.reload() )
});
gulp.task('images', function() {
    return gulp.src('./client/img/**/*.*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('build/img')) 
        .pipe(notify({ message: '图片压缩完成。。' }))
        .pipe( connect.reload() );
});

gulp.task('clean', function() {
    gulp.src(['build/css/**/*.css','build/js/**/*.js','build/img/**/*.*'])
        .pipe(clean());
});
gulp.task('watch',function(){
    gulp.watch('client/js/**/*.js',['js']);
    gulp.watch('client/css/**/*.css',['css']); 
    gulp.watch('views/**/*.html',['html']);
    gulp.watch('client/img/**/*.*',['images']);
});
gulp.task('server',['html','js','css','images','watch','clean','connect']);
gulp.task('build',['html','js','css','images']);