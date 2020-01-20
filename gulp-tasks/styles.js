'use strict';

module.exports = function ({ gulp, gp, path }) {

  const onError = require(path.message.error);
  const isProd = process.env.NODE_ENV == 'production';

  return gulp
        .src(path.styles.src, { sourcemaps: true })
        .pipe(gp.plumber({ errorHandler: onError }))
        .pipe(gp.sass({ includePaths: [__dirname+'/', 'node_modules'] }))
        .pipe(gp.groupCssMediaQueries())
        .pipe(gp.autoprefixer({
            overrideBrowserslist: [
              'last 3 version',
              '> 1%',
              'ie 9'
            ],
            cascade: true,
            grid: true
          }))
        .pipe(gp.if(isProd, gp.cleanCss({ level: 2 })))
        .pipe(gp.if(isProd, gp.rename({ suffix: '.min' })))
        .pipe(gp.if(!isProd,
          gulp.dest(path.styles.build, { sourcemaps: true }),
          gulp.dest(path.styles.build, { sourcemaps: false })));
};
