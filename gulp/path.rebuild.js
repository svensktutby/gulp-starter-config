'use strict';

module.exports = function () {
  $.gulp.task('path:rebuild', function (done) {
    delete require.cache[require.resolve('./path.js')];
    $.path = require('./path.js');
    done();
  });
};
