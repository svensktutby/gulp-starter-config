'use strict';

module.exports = function () {
  $.gulp.task('sprite:png', function () {

    let spriteData = $.gulp.src($.path.spritePng.src)
      .pipe($.gp.debug({ title: 'sprite:png:', showFiles: true }))
      .pipe($.gp.spritesmith({
        imgName: 'sprite-png.png',
        cssName: '_sprite-png.scss',
        cssFormat: 'scss',
        padding: 10,
        algorithm: 'top-down',
        //cssVarMap(sprite) {
          // sprite.name = 'icon-' + sprite.name;
        //},
        imgPath: '../img/sprite-png.png'
      }));

    let imgStream = spriteData.img
      .pipe($.buffer())
      .pipe($.gp.if($.isProd, $.gp.imagemin(
        [$.pngquant({
        quality: [0.8, 0.9],
        speed: 2,
        strip: true
      })])))
      .pipe($.gulp.dest($.path.spritePng.build));

    let cssStream = spriteData.css
      .pipe($.gulp.dest('./tmp'));
    return $.merge(imgStream, cssStream);
  });
};