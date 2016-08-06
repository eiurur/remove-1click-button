gulp   = require 'gulp'
$      = do require 'gulp-load-plugins'
config = require('../config').js_copy

# js copy
gulp.task 'js_copy', ->
  gulp.src config.src
    .pipe $.plumber()
    .pipe gulp.dest config.dest
    .pipe $.notify 'js task complete'