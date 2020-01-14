'use strict';

module.exports = function() {
  $.gulp.task('favicon:manifest', function(done) {
    try {
      $.fs.accessSync($.path.favicon.buildManifest);

      const androidManifest = require('.' + $.path.favicon.buildManifest);
      const faviconConfig = require('.' + $.path.favicon.data);

      androidManifest.icons = faviconConfig.options.androidChromeIcons;
      $.fs.writeFile($.path.favicon.buildManifest, JSON.stringify(androidManifest), done);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      done();
    }
  });
};
