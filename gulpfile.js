var gulp = require('gulp'),
    sass = require('gulp-sass'),
    server = require('gulp-server-livereload');

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch:sass', function () {
    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch("./src/*html");
});

gulp.task('webserver', function () {
    gulp.src('./src')
        .pipe(server({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch:sass', 'webserver']);
