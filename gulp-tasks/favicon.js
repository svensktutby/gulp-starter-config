'use strict';

module.exports = function ({ gulp, gp, path }) {

  const pngquant = require('imagemin-pngquant');
  const faviconConfig = require('.' + path.favicon.data);
  const isProd = process.env.NODE_ENV == 'production';

  return gulp
        .src(path.favicon.src)
        .pipe(gp.if(isProd, gp.favicons(faviconConfig.options)))
        .pipe(gp.filter(faviconConfig.options.filteredFavicons))
        .pipe(gp.if(isProd, gp.imagemin(
          [pngquant({
          quality: [0.8, 0.9],
          speed: 2,
          strip: true
        })])))
        .pipe(gulp.dest(path.favicon.build))
        .pipe(gp.debug({ title: 'favicon', showFiles: false }));
};
