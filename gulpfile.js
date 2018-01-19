'use strict';

// Required modules
const gulp = require('gulp'),
  // path = require('path'),
  // _ = require('lodash'),
  doctoc = require('doctoc/lib/transform'),
  del = require('del'),
  plugin = require('gulp-load-plugins')(),
  reactDocsPlugin = require('gulp-react-docs')

// Helper vars
const docsDest = './dist/docs'

// Tasks
gulp.task('default', ['react-docs'])

gulp.task('clean', function(cb) { del(docsDest, cb) })

gulp.task('check:docs', ['docs'], function(cb) {
  exec('git diff --name-only docs/', function(err, diffFiles) {
    if (diffFiles.indexOf('.md') > -1) {
      plugin.util.log('Automatically generated documentation is not up to \
date with the changes in the codebase. Please run `gulp` and commit the changes.')
      process.exit(1)
    } else {
      plugin.util.log('Automatically generated documentation is up to date!')
    }
    cb()
  })
})

gulp.task('react-docs', function() {
  const mdTitle = '# React Component Reference'

  return gulp.src('./src/component/**/*.jsx')
    .pipe(reactDocsPlugin({
      path: docsDest
    }))
    .pipe(plugin.concat('README.md'))
    .pipe(plugin.tap(function(file) {
      // Generate table of contents for components.md
      const mdWithToc = doctoc(file.contents.toString(), null, 2, mdTitle).data
      file.contents = new Buffer(mdWithToc)
    }))
    .pipe(gulp.dest(docsDest))
});
