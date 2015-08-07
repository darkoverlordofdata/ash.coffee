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

isCocos2d = fs.existsSync('./web/project.json') and require('./web/project.json').engineDir?

###
 * Command line arguments
###
option '-c', '--compile [LEVEL]', 'closure compiler level'
option '-v', '--version [VERSION]', 'version to bump: major|minor|patch'

option '-h', '--host [HOST]', 'serve server hostname'
option '-p', '--port [PORT]', 'serve server port'
option '-l', '--log [LOG]', 'serve server loggging style (default: dev)'
option '-r', '--release', 'release mode'



###
 * Task release
 *
 * create the outputs
 * bump the version number
 * write the version source file
 *
 * cake -c WHITESPACE_ONLY release
 * cake -c SIMPLE_OPTIMIZATIONS release
 * cale -c ADVANCED_OPTIMIZATIONS release
 *
###
task 'make', 'compile app to build/', (options) ->

  fs.copySync "lib/src/cclib-rt.js", "web/src/alienzone/cclib-rt.js"
  fs.mkdirs "build/web"
  fs.copySync "web/res", "build/web/res"
  fs.copySync "web/index.html", "build/web/index.html"
  fs.copySync "web/license.md", "build/web/license.md"
  fs.copySync "web/readme.md", "build/web/readme.md"
  fs.copySync "web/main.js", "build/web/main.js"
  fs.copySync "web/project.json", "build/web/project.json"
  fs.copySync "web/manifest.json", "build/web/manifest.json"
  fs.copySync "web/license.js", "build/web/license.js"

  if options.compile?
    # merge all the code together in 1 compiled file
    invoke 'compile'
  else
    # copy the individual javascript files
    fs.copySync "web/src", "build/web/src"
    if isCocos2d
      fs.mkdirs "build/web/frameworks"
      fs.copySync "web/frameworks/cocos2d-html5", "build/web/frameworks/cocos2d-html5"

###
 * Task compile
 *
 * use the closure compiler
 *
 * cake -c WHITESPACE_ONLY build
 * cake -c SIMPLE_OPTIMIZATIONS build
 * cale -c ADVANCED_OPTIMIZATIONS build
###
task 'compile', 'closure compiler', (options) ->

  require('closure-compiler').compile getCode(isCocos2d),
    compilation_level: options.compile ? WHITESPACE_ONLY
    js_output_file: 'build/web/main.js'
  , (err, code, stderr) ->

    throw err if err

    if isCocos2d
    # fixup:
    # remove cocos2d project references to the files we just bundled
      project = require('./build/web/project.json')
      delete project['modules']
      delete project['jsList']
      delete project['engineDir']
      fs.writeFileSync('./build/web/project.json', JSON.stringify(project))

###
 * Task manifest
 *
 * write the apcache manifest file
###
task 'manifest', 'write the appcache manifest', (options) ->

  gulp = require('gulp')
  manifest = require('gulp-manifest')

  gulp.src(["build/web/**/*.*"])
  .pipe(manifest(
      hash: true
      timestamp: true
      preferOnline: false
      network: ['*']
      filename: 'manifest.appcache'
      exclude: 'manifest.appcache'
    ))
  .pipe(gulp.dest("build/web"))


###
 * Dist
 *
 * bundle up the source code
 * create a minified distribution
###
task 'dist', 'bundle the lib to build/', (options) ->

  options.level ?= 'WHITESPACE_ONLY'
  project = require('./package.json')

  require('closure-compiler').compile getCode(isCocos2d),
    compilation_level: options.compile
    js_output_file: "build/web/#{project.name}.js"


###
 * Get
 *
 * get dependencies
###
task 'patch', 'get dependencies from bower repository', (options) ->

  patch "web/src/jmatch3/jmatch3.js", "tools/patch/jmatch3.js.patch"
  patch "web/src/tween.ts/tween.min.js", "tools/patch/tween.min.js.patch"


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

###
 * Task bump
 *
 * bump the version number
 * write the version source file
 *
 * cake -v patch bump
 * cake -v minor bump
 * cale -v major bump
###
task 'version', 'bump the version', (options) ->

  options.version ?= 'patch'

  project = require('./package.json')
#  project.version = require('semver').inc(project.version, options.version)
#  fs.writeFileSync('./package.json', JSON.stringify(project, null, '    '))

  liquid = require('liquid.coffee')
  tpl = fs.readFileSync('./lib/src/build.ts.tpl', 'utf8')
  fs.writeFileSync('./lib/src/build.ts', liquid.Template.parse(tpl).render(VERSION: project.version))

###
 * Patch
 *
 * @see https://code.google.com/p/google-diff-match-patch/
 *
 * @param {string} source filename
 * @param {string} changes patch filename
###
patch = (source, changes) ->
  DiffMatchPatch = require('./tools/diff_match_patch/javascript/diff_match_patch_uncompressed.js').diff_match_patch
  dmp = new DiffMatchPatch()

  orig = fs.readFileSync(source, 'utf8')
  delta = fs.readFileSync(changes, 'utf8')
  results = dmp.patch_apply(dmp.patch_fromText(delta), orig)
  fs.writeFileSync(source, results[0])


###
 * Get Code
###
getCode = (isCocos2d) ->
  if isCocos2d
    (fs.readFileSync(file, 'utf8') for file in getCocos2dFiles(true)).join('\n')
  else
    (fs.readFileSync(file, 'utf8') for file in getJsFiles()).join('\n')

###
 * Get JS Files
###
getJsFiles = () ->
  require('./jsconfig.json').files

###
 *
 * Get Cocos2d Files
 *
 * get list of source files for cocos2d projects
 *
 * @param {boolean} standalone - include cocos2d libraries + main
 * @return {Array<string>} list of file names
###
getCocos2dFiles = (standalone=false) ->

  cocos2d = require("./web/project.json")

  root = "./web/#{cocos2d.engineDir}"
  if standalone # include the framework
    moduleConfig = require("#{root}/moduleConfig.json")
    files = ["#{root}/#{moduleConfig.bootFile}"]
    for module in cocos2d.modules
      for name, value of moduleConfig.module[module]
        for file in moduleConfig.module[value]
          files.push("#{root}/#{file}") unless moduleConfig.module[file]?
  else files = []

  for file in cocos2d.jsList
    files.push("./web/#{file}")

  files.push("./web/main.js")
  return files

