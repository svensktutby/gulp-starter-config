'use strict';

module.exports = function ([ gulp, gp, path ]) {

  const onError = require(path.message.error);

  return gulp
        .src(path.spriteSvg.src)
        .pipe(gp.plumber({ errorHandler: onError }))
        .pipe(gp.debug({ title: 'sprite:svg:', showFiles: false }))
        .pipe(
          gp.cache(
            gp.imagemin([
              gp.imagemin.svgo({
                plugins: [
                  { removeViewBox: false },
                  { cleanupIDs: true },
                  { removeAttrs: { attrs: ['version'] } },
                  { removeUselessStrokeAndFill: false },
                  { convertPathData: false }
                ]
              })
            ])
          )
        )
        .pipe(gp.svgstore({ inlineSvg: true }))
        .pipe(gulp.dest(path.spriteSvg.build));
};
