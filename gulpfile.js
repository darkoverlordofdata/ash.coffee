/**
 * Expose cake commands with gulp for use by WebStorm
 *
 */
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build', shell.task(['npm run build']));
gulp.task('get', shell.task(['npm run get']));
gulp.task('publish', shell.task(['npm run publish']));
gulp.task('serve', shell.task(['npm run serve']));
gulp.task('test', shell.task(['npm run test']));
