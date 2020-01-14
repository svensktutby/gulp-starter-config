'use strict';

const faviconConfig = require('.' + $.path.favicon.data);

module.exports = function () {
  $.gulp.task('favicon', function () {
    return $.gulp
      .src($.path.favicon.src)
      .pipe($.gp.if($.isProd, $.gp.favicons(faviconConfig.options)))
      .pipe($.gp.filter(faviconConfig.options.filteredFavicons))
      .pipe($.gp.if($.isProd, $.gp.imagemin(
        [$.pngquant({
        quality: [0.8, 0.9],
        speed: 2,
        strip: true
      })])))
      // .pipe($.gp.if(function (file) {
      //   return faviconConfig.options.filteredFavicons.find(favicon => file.basename == favicon);
      // }, $.gulp.dest($.path.favicon.build)))
      .pipe($.gulp.dest($.path.favicon.build))
      .pipe($.gp.debug({ title: 'favicon', showFiles: false }));
  });
};