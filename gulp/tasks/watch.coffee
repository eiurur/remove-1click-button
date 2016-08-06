gulp   = require("gulp")
watch  = require("gulp-watch")
config = require("../config").watch

gulp.task "watch", ->

  # js_copy
  watch config.js_copy, ->
    gulp.start ["js_copy"]

  # images_copy
  watch config.images_copy, ->
    gulp.start ["images_copy"]
