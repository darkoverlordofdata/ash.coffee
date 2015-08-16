/**
 * Expose cake commands with gulp for use by WebStorm
 *
 */
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build', shell.task(['npm run build']));
gulp.task('compile', shell.task(['npm run compile']));
gulp.task('dist', shell.task(['npm run dist']));
gulp.task('get', shell.task(['npm run get']));
gulp.task('serve', shell.task(['npm run serve']));
gulp.task('test', shell.task(['npm run test']));
gulp.task('make:build', shell.task(['cake make:build']));

gulp.task('publish:gh-pages', function() {
  var ghPages = require('gulp-gh-pages');
  return gulp.src('./build/web/**/*')
    .pipe(ghPages());
});



