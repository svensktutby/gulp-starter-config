'use strict';

module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp
      .src($.path.pug.src, {
      since: $.gulp.lastRun('pug')// compares changes by date, not by content as gulp-cached
    })
    .pipe($.gp.plumber({ errorHandler: $.onError }))
    .pipe($.gp.pug({ pretty: true }))
    .pipe($.gp.debug({ title: 'pug:', showFiles: true }))
    .pipe($.gulp.dest($.path.pug.build));
  });
};