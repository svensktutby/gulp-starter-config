'use strict';

module.exports = function () {
  $.gulp.task('images', function () {
    return $.gulp
      .src($.path.images.src)
      .pipe($.gp.plumber({ errorHandler: $.onError }))
      .pipe($.gp.changed($.path.images.build))
      .pipe($.gp.if($.isProd, $.gp.cache($.gp.imagemin(
        [
          $.pngquant({
            quality: [0.8, 0.9],
            speed: 2,
            strip: true
          }),
          $.mozjpeg({
            progressive: true,
            quality: 85,
            quantTable: 2
          }),
          $.gp.imagemin.gifsicle({
            interlaced: true
          }),
          $.gp.imagemin.svgo({
            plugins: [
              { removeViewBox: false },
              { cleanupIDs: true },
              { removeAttrs: {attrs:['version']} },
              { removeUselessStrokeAndFill: false },
              { convertPathData: false }
            ]
          })
        ], {
          verbose: true
        }))))
      .pipe($.gp.debug({ title: 'images:', showFiles: true }))
      .pipe($.gulp.dest($.path.images.build));
  });
};