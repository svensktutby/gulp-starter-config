'use strict';

module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch($.path.pug.watch, $.gulp.series('pug'));
    $.gulp.watch($.path.styles.watch, $.gulp.series('styles'));
    $.gulp.watch($.path.styles.lint, $.gulp.series('stylelint'));
    $.gulp.watch($.path.scripts.watch, $.gulp.parallel('eslint', 'scripts'));
    $.gulp.watch($.path.fonts.watch, $.gulp.series('fonts'));
    $.gulp.watch($.path.images.watch, $.gulp.series('images'));
    $.gulp.watch($.path.spriteSvg.watch, $.gulp.series('sprite:svg'));
    $.gulp.watch($.path.spritePng.watch, $.gulp.series('sprite:png'));
    $.gulp.watch('./gulp/path.js', $.gulp.series('path:rebuild', 'build:dev'));
    $.gulp.watch($.path.files.build).on('change', $.browserSync.reload);
  });
};