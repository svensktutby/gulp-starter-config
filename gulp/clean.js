'use strict';

module.exports = function () {
  $.gulp.task('clean', function () {
    return $.del([
      $.path.clean.build,
      $.path.clean.tmp
    ]);
  });
};