var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var rev = require('gulp-rev');
var revcollector = require('gulp-rev-collector')

port = process.env.port || 5000;
gulp.task('connect',function(){
    connect.server({
        root:'',
        port:port,
        livereload:true
    })
});

gulp.task('js',function(){
    gulp.src('./client/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js'))
        .pipe(notify('js压缩合并完成。。'))
        .pipe(connect.reload())
});
gulp.task('rev',function(){
    gulp.src(['rev/**/*.json','views/**/*.html'])
        .pipe(revcollector({
            replacreReaved:true
        }))
        .pipe(gulp.dest('src/'))
});
gulp.task('css',function(){
    gulp.src([
        './client/css/**/*.css',
        './bower_components/bootstrap/dist/css/bootstrap.css'
    ])
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(concat('main.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify('css压缩完毕。。'))
        .pipe(connect.reload())
});
gulp.task('html',function(){
    gulp.src('./views/**/*.html')
        .pipe( connect.reload() )
});

gulp.task('clean', function() {
    gulp.src(['dist/css/**/*.css','dist/js/**/*.js'])
        .pipe(clean());
});
 gulp.task('watch',function(){
     gulp.watch('client/js/**/*.js',['js']);
     gulp.watch('client/css/**/*.css',['css']);
     gulp.watch('views/**/*.html',['html'])
 });
gulp.task('serve',['html','js','css','rev','watch','clean','connect']);