'use strict';

module.exports = function ({ browserSync }) {

  return browserSync.init({
    open: false,
    notify: false,
    server: {
      port: 3000,
      baseDir: './build'
    }
  });
};
