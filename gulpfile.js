var gulp = require('gulp');

var sass = require('gulp-sass');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('css/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('css/main.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);
