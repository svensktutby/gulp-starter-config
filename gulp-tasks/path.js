'use strict';

module.exports = {
  tasks: [
    './gulp-tasks/pug.js',
    './gulp-tasks/styles.js',
    './gulp-tasks/scripts.js',
    './gulp-tasks/clean.js',
    './gulp-tasks/fonts.js',
    './gulp-tasks/images.js',
    './gulp-tasks/favicon.js',
    './gulp-tasks/favicon.manifest.js',
    './gulp-tasks/clear.js',
    './gulp-tasks/sprite.svg.js',
    './gulp-tasks/sprite.png.js',
    './gulp-tasks/eslint.js',
    './gulp-tasks/stylelint.js',
    './gulp-tasks/path.rebuild.js',
    './gulp-tasks/deploy.js',
    './gulp-tasks/serve.js',
    './gulp-tasks/watch.js'
  ],
  message: {
    error: './message.error.js'
  },
  dir: {
    'src': './src/',
    'build': './build/',
    'tmp': './tmp/',
    'blocks': './src/blocks/'
  },
  pug: {
    src: [
      './src/template/**/*.pug',
      '!./src/template/layouts/**/*.pug'
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
      './src/**/*.scss',
      '!./src/style/base/**/*.scss',
      '!./src/style/helpers/**/*.scss',
      '!./src/style/vendor/**/*.scss'
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
    ],
    lint: [
      './src/js/**/*.js',
      './src/blocks/**/*.js'
    ]
  },
  images: {
    src: [
      './src/blocks/**/*.{jpg,jpeg,png,gif,svg}',
      './src/img/**/*.{jpg,jpeg,png,gif,svg}',
      '!./src/blocks/sprite-svg/svg/*.svg',
      '!./src/blocks/sprite-svg/img/*.svg',
      '!./src/img/sprite-png/**/*',
      '!./src/img/favicon/**/*'
    ],
    build: './build/img/',
    watch: [
      './src/img/**/*.{jpg,jpeg,png,gif,svg}',
      '!./src/blocks/sprite-svg/svg/*.svg',
      '!./src/img/sprite-png/**/*',
      '!./src/img/favicon/**/*'
    ],
  },
  spriteSvg: {
    src: [
      './src/blocks/sprite-svg/svg/*.svg'
    ],
    build: './src/blocks/sprite-svg/img/',
    watch: [
      './src/blocks/sprite-svg/svg/*.svg'
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
