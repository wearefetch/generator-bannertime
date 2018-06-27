'use strict';

const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

gulp.task('build:development', (cb) => {
  gulpSequence('clean', ['videos'], ['fonts', 'images', 'svg-sprite'], ['sass', 'js', 'json', 'manifest', 'html'], cb);
});
