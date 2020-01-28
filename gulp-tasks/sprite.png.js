'use strict';

module.exports = function ({ gulp, gp, path }) {

  const buffer = require('vinyl-buffer');
  const merge = require('merge-stream');
  const pngquant = require('imagemin-pngquant');
  const del = require('del');
  const isProd = process.env.NODE_ENV == 'production';
  let fileName = 'sprite-' + Math.random().toString().replace(/[^0-9]/g, '') + '.png';
  del(`${path.spritePng.build}/img/*.png`);

  let spriteData = gulp.src(path.spritePng.src)
      .pipe(gp.debug({ title: 'sprite:png:', showFiles: false }))
      .pipe(gp.spritesmith({
        imgName: fileName,
        cssName: 'sprite-png.scss',
        cssFormat: 'css',
        padding: 30,
        algorithm: 'top-down',
        imgPath: '../img/' + fileName
      }));

    let imgStream = spriteData.img
      .pipe(buffer())
      .pipe(gp.if(isProd, gp.imagemin(
        [pngquant({
        quality: [0.8, 0.9],
        speed: 2,
        strip: true
      })])))
      .pipe(gulp.dest(`${path.spritePng.build}/img/`));

    let cssStream = spriteData.css
      .pipe(gulp.dest(path.spritePng.build));

    return merge(imgStream, cssStream);
};
