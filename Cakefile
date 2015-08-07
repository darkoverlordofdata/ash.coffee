###
#+--------------------------------------------------------------------+
#| Cakefile
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2014-2015
#+--------------------------------------------------------------------+
#|
#| workflow
#|
#| workflow is free software; you can copy, modify, and distribute
#| it under the terms of the MIT License
#|
#+--------------------------------------------------------------------+
#
# Tasks:
#
# build   - compile app to build/
# deploy  - deploy build/web/ to location
# get     - get dependencies from bower repository
# help    - display this message
# publish - publish build/web/ to gh-pages
# serve   - open build/web in browser
# test    - open web/ in browser with live reload
#
# | -- bin                    public tools
# | -- build                  compiled output
# | -- example                example using the lib
# | -- lib                    sources for this project - library or application
# | -- node_modules           npm dependencies
# | -- packages               local repository
# | -- test                   unit tests
# | -- tools                  private tools
# | -- web                    application root. For library, this uses example
# |     | -- index.html       default web page
# |     | -- main.js          optional cocos2d default script
# |     | -- project.json     optional cocos2d manifest
# |     | -- frameworks       optional cocos2d lib
# |     | -- res              optional cocos2d resources
# |     + -- (src | packages) compiled lib target, respository pre-built
# |           | -- {lib}
# |           | -- example
# |           + -- ...
# | -- .bowerrc               defines ./packages repository
# | -- bower.json             module name, packages
# | -- Cakefile               this workflow
# | -- package.json           node project info
# + -- tsconfig.json          optional typescript project file
#
###


###
 * load dependencies
###
fs = require('fs-extra')
path = require('path')
exec = require('executive')

###
 * Task release
 *
 * create the outputs
 * bump the version number
 * write the version source file
 *
###
task 'build', 'compile app to build/', (options) ->

  fs.copySync "lib/ash.d.ts", "build/ash.d.ts"
  fs.mkdirs "build/web"
  fs.mkdirs "build/lib"
  fs.copySync "lib", "build/lib"
  fs.copySync "web/src", "build/web/src"
  fs.copySync "web/example.html", "build/web/example.html"
  fs.copySync "web/favicon.png", "build/web/favicon.png"
  fs.copySync "web/icon128.png", "build/web/icon128.png"
  fs.copySync "web/index.html", "build/web/index.html"
  fs.copySync "web/main.js", "build/web/main.js"

  code = (fs.readFileSync(file, 'utf8') for file in require('./jsconfig.json').files).join('\n')

  fs.writeFileSync("build/ash.js", code)

  require('closure-compiler').compile code,
    compilation_level: 'WHITESPACE_ONLY'
    js_output_file: "build/ash.min.js",
  , (err, code, stderr) ->

    throw err if err


###
 * Publish
 *
 * publish to github gh-pages
###
task 'publish', 'publish build/web/ to gh-pages', (options) ->

  gulp = require('gulp')
  gh_pages = require('gulp-gh-pages')

  gulp.src("build/web/**/*.*")
  .pipe(gh_pages())

