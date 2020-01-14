'use strict';

const ghPages = require('gh-pages');
const path = require('path');

module.exports = function () {
  $.gulp.task('deploy', function (cb) {
    ghPages.publish(path.join(process.cwd(), './build'), cb);
  });
};