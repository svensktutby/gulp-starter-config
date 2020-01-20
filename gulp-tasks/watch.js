'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = function ([ gulp, gp, path, browserSync ]) {

  const { watch, series, parallel } = gulp;

  return new Promise((resolve) => {

    watch(path.pug.watch, series('pug'));
    watch(path.styles.watch, series('styles'));
    watch(path.styles.lint, series('stylelint'));
    watch(path.scripts.watch, parallel('eslint', 'scripts'));
    watch(path.fonts.watch, series('fonts'));
    watch(path.images.watch, series('images'));
    watch(path.spriteSvg.watch, series('spriteSvg'));
    watch(path.spritePng.watch, series('spritePng'));
    watch('./tasks/path.js', series('pathRebuild', 'build'));
    watch(path.files.build).on('change', browserSync.reload);

    resolve();
  });
};
