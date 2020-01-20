'use strict';

module.exports = function ({ gulp, gp, path }) {

  return gulp
        .src(path.fonts.src)
        .pipe(gp.changed(path.fonts.build))
        .pipe(gp.debug({ title: 'fonts:', showFiles: true }))
        .pipe(gulp.dest(path.fonts.build));
};
