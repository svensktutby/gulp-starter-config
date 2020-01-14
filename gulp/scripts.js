'use strict';
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config.js');

module.exports = function() {
  $.gulp.task('scripts', function() {
    return $.gulp
      .src($.path.scripts.src)
      .pipe($.gp.plumber({ errorHandler: $.onError }))
      .pipe($.named())
      .pipe(webpackStream(webpackConfig))
      .pipe($.gp.if($.isProd, $.gp.rename({ suffix: '.min' })))
      .pipe($.gulp.dest($.path.scripts.build));
  });
};
