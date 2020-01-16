'use strict';

const gulp = require('gulp');
const { task, series, parallel } = gulp;
const gp = require('gulp-load-plugins')();
const path = require('./gulp-tasks/path.js');

/**
   * Converting a string into camel case
   * @param {string} str
   * @return {string}
   */
const camelize = str => str
  .replace(/\.(\w)/g, (match, chr) => chr.toUpperCase());

/**
   * Getting a task name from the path
   * @param {string} taskPath
   * @return {string}
   */
const getTaskName = taskPath => taskPath
  .slice(taskPath.lastIndexOf('/') + 1, taskPath.lastIndexOf('.'));

/**
 * Creating all Gulp tasks from paths ('gulp --tasks' in CLI)
 * @param {Array} allTasksPath
 * @param {Array} options
 */
(function createGulpTasks(allTasksPath, options = []) {
  allTasksPath.tasks.forEach(taskPath => {
    gulp.task(camelize(getTaskName(taskPath)), function (cb) {
      let task = () => require(taskPath)(options);
      return task(cb);
    });
  });
})(path, [ gulp, gp, path ]);

task('build',
  series(
  'clean',
  parallel(
    'fonts',
    'images',
    'spriteSvg',
    'spritePng',
    series(
      'favicon',
      'faviconManifest'
    )
  ),
  parallel(
    'pug',
    'styles',
    'scripts',
    'eslint',
    'stylelint'
  )
));

task('default',
  series(
  'build',
  parallel(
    'watch',
    'serve'
  )
));
