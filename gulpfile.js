var gulp = require('gulp');
var sass = require('gulp-sass');
var $ = require('gulp-load-plugins')({lazy: true});
var browserSync = require('browser-sync').create();

gulp.task('scss', function () {
    console.log('Run scss tasks');

    return gulp
        .src('./assets/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css/'))
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./",
            port: 8080
        }
    });

    gulp.watch('./assets/sass/**/*.scss', gulp.series('scss'));
    gulp.watch('*.html').on('change', browserSync.reload);
});