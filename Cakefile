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
# npm tasks:
#
# build   - compile app to build
# get     - get dependencies from bower repository
# publish - publish build to gh-pages
# serve   - open build in browser
# start   - open dev in browser
# test    - run tests
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
 * Make
 *
 * make the build command
 *
###
task 'make:build', 'stuff the build script', (options) ->

  c0 = """
    cp -f lib/ash.d.ts build/ash.d.ts
    cp -rf lib build
    cp -rf web/src build/web/src
    cp -f web/example.html build/web/example.html
    cp -f web/favicon.png build/web/favicon.png
    cp -f web/icon128.png build/web/icon128.png
    cp -f web/example_build.html build/web/index.html
    cp -f web/main.js build/web/main.js  
    """.split('\n').join(' && ')

  files = require('./csconfig.json').files.join(" ")
  c1 = "cat #{files} | coffee -cs > build/ash.js"
  c2 = "cat #{files} | coffee -cs | java -jar tools/compiler.jar --compilation_level WHITESPACE_ONLY --js_output_file build/ash.min.js"
  
  project = require('./package.json')  
  
  project['scripts']['build'] = "#{c0} && #{c1} && #{c2}"
  require('fs').writeFileSync('./package.json', JSON.stringify(project, null, '  '))
  


###
 * Publish
 *
 * publish to github gh-pages
###
task 'publish:gh-pages', 'publish build/web/ to gh-pages', (options) ->

  gulp = require('gulp')
  gh_pages = require('gulp-gh-pages')

  gulp.src("build/web/**/*.*").pipe(gh_pages())

