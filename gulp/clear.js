'use strict';

module.exports = function () {
  $.gulp.task('clear', function () {
    return $.gp.cache.clearAll();// clear image cache
  });
};