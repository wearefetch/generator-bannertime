'use strict';

const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

gulp.task('build:production', (cb) => {
  process.env.NODE_ENV = 'production';
  gulpSequence('clean', ['videos'], ['fonts', 'images', 'svg-sprite'], ['sass', 'js', 'json', 'manifest', 'html'], ['zip', 'backup-image'], cb);
});
