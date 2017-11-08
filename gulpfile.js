const gulp = require("gulp");
const gMocha = require("gulp-mocha");

gulp.task('default', () =>
    gulp.src('../test/*.spec.js', {read: false})
        .pipe(gMocha({reporter: 'nyan'}))
);