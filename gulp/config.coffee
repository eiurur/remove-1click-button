path = require "path"
dest = "./build"
src  = "./src"

relativeSrcPath = path.relative(".", src)
module.exports =

  # 出力先の指定
  dest: dest

  js_copy:
    src: src + "/js/**"
    dest: dest + "/js/"

  images_copy:
    src: src + "/images/**"
    dest: dest + '/images/'

  clean:
    target: './build'

  watch:
    js_copy: relativeSrcPath + "/js/**"
    images_copy: relativeSrcPath + "/images/**"