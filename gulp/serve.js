'use strict';

module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      open: false,
      notify: false,
      server: {
        port: 3000,
        baseDir: './build'
      }
    });
  });
};