'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = function ([ gulp, gp, path ]) {

  const del = require('del');

  return del([
    path.clean.build,
    path.clean.tmp
  ]);
};
