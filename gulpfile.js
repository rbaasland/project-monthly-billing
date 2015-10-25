var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('assets/css/main.scss')
        .pipe(sass())
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename(function (path) {
            path.basename += ".min";          }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
    return gulp.src('assets/js/main-scripts.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";          }))
        .pipe(gulp.dest('assets/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/css/styles.scss', ['sass']);
    gulp.watch('assets/js/main-scripts.js', ['js']);
});

// Default Task
gulp.task('default', ['sass', 'js', 'watch']);
