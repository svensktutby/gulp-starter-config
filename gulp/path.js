'use strict';

module.exports = {
  tasks: [
    './gulp/pug.js',
    './gulp/styles.js',
    './gulp/scripts.js',
    './gulp/clean.js',
    './gulp/fonts.js',
    './gulp/images.js',
    './gulp/favicon.js',
    './gulp/favicon.manifest.js',
    './gulp/clear.js',
    './gulp/sprite.svg.js',
    './gulp/sprite.png.js',
    './gulp/eslint.js',
    './gulp/stylelint.js',
    './gulp/path.rebuild.js',
    './gulp/deploy.js',
    './gulp/serve.js',
    './gulp/watch.js'
  ],
  files: {
    src: './src/**/*.*',
    build: './build/**/*.*'
  },
  clean: {
    build: './build/**',
    tmp: './tmp/**'
  },
  pug: {
    src: [
      './src/template/**/*.pug',
      '!./src/template/layouts/**/*.pug',
      '!./src/template/pages/**/*.pug'
    ],
    build: './build/',
    watch: [
      './src/template/**/*.pug',
      './src/blocks/**/*.pug'
    ]
  },
  styles: {
    src: './src/style/style.scss',
    build: './build/css/',
    watch: [
      './src/style/**/*.scss',
      './src/blocks/**/*.scss'
    ],
    lint: [
      './src/style/**/*.scss',
      './src/blocks/**/*.scss',
      '!./src/style/vendor/**/*.scss',
      '!./src/style/helpers/**/*.scss',
      '!./src/style/base/**/*.scss'
    ]
  },
  scripts: {
    src: [
      './src/js/*.js',
      '!./src/js/utils/*.js',
    ],
    build: './build/js/',
    watch: [
      './src/js/**/*.js',
      './src/blocks/**/*.js'
    ]
  },
  images: {
    src: [
      './src/img/**/*.{jpg,jpeg,png,gif,svg}',
      '!./src/img/sprite-svg/**/*',
      '!./src/img/sprite-png/**/*',
      '!./src/img/favicon/**/*'
    ],
    build: './build/img/',
    watch: [
      './src/img/**/*.{jpg,jpeg,png,gif,svg}',
      '!./src/img/sprite-svg/**/*',
      '!./src/img/sprite-png/**/*',
      '!./src/img/favicon/**/*'
    ],
  },
  spriteSvg: {
    src: [
      './src/img/sprite-svg/*.svg'
    ],
    build: './tmp',
    watch: [
      './src/img/sprite-svg/*.svg'
    ]
  },
  spritePng: {
    src: [
      './src/img/sprite-png/*.png'
    ],
    build: './build/img/',
    watch: [
      './src/img/sprite-png/*.png'
    ]
  },
  fonts: {
    src: './src/fonts/**/*.{woff,woff2,eot,ttf,svg}',
    build: './build/fonts',
    watch: './src/fonts/**/*.{woff,woff2,eot,ttf,svg}'
  },
  favicon: {
    src: './src/img/favicon/*.{jpg,jpeg,png,gif,svg}',
    data: './src/img/favicon/favicon-data.json',
    build: './build/img/favicon/',
    buildManifest: './build/img/favicon/manifest.json'
  }
};
