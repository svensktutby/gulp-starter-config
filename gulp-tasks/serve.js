'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = function ([ gulp, gp, path ]) {
  
  const browserSync = require('browser-sync').create();

  return browserSync.init({
    open: false,
    notify: false,
    server: {
      port: 3000,
      baseDir: './build'
    }
  });
};
