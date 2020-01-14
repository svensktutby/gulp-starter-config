'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  buffer: require('vinyl-buffer'),
  named: require('vinyl-named'),
  merge: require('merge-stream'),
  through2: require('through2'),
  fs: require('fs'),
  browserSync: require('browser-sync').create(),
  pngquant: require('imagemin-pngquant'),
  mozjpeg: require('imagemin-mozjpeg'),
  path: require('./gulp/path.js'),
  isProd: process.env.NODE_ENV == 'production'
};

$.path.tasks.forEach(function (taskPath){
  require(taskPath)();
});

/* Notify error message
 ******************************/
$.onError = function (error) {
  $.gp.notify.onError({
    title: 'Error in ' + error.plugin,
    message: [
      '',
      '----------ERROR MESSAGE START----------',
      error.message,
      '----------ERROR MESSAGE END----------'
    ].join('\n'),
    sound: 'Hero'
  })(error);
  this.emit('end');
};

/* Build developing
******************************/
$.gulp.task('build:dev', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'fonts',
    'images',
    'sprite:svg',
    'sprite:png'
  ),
  $.gulp.parallel(
    'pug',
    'styles',
    'scripts'
  )
));

/* Build production
******************************/
$.gulp.task('build:prod', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'fonts',
    'images',
    'sprite:svg',
    'sprite:png',
    $.gulp.series(
      'favicon',
      'favicon:manifest'
    )
  ),
  $.gulp.parallel(
    'pug',
    'styles',
    'scripts',
    'eslint',
    'stylelint'
  )
));

/* Default
******************************/
$.gulp.task('default', $.gulp.series(
  'build:dev',
  $.gulp.parallel(
    'watch',
    'serve'
  )
));