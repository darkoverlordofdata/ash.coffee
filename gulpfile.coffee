###
#+--------------------------------------------------------------------+
#| gulpfile.coffee
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2014-2015
#+--------------------------------------------------------------------+
#|
#| dart-like workflow
#|
#| dart-like is free software; you can copy, modify, and distribute
#| it under the terms of the MIT License
#|
#+--------------------------------------------------------------------+
#
# Tasks:
#
# build   - build lib sources to web/src/{{lib}}, copy to build/web
# get     - gets packages dependencies using bower
# publish - publish gh-pages
# serve   - open build\web\ in browser
# test    - open web\ in browser 
#
# manually copy required bits from packages/module to web/src/module
#
# project
# | -- bin                    tools
# | -- build                  output folder for zip
# | -- example                example using the lib
# | -- lib                    defines this packages
# | -- node_modules           npm dependencies
# | -- packages               bower external packages
# | -- test                   unit tests
# | -- (tmp)                  temporary
# | -- web                    source
# |     | -- index.html       default web page
# |     | -- main.js          cocos2d boot
# |     | -- manifest.json    android 'save to home screen'
# |     | -- project.json     cocos2d manifest
# |     | -- frameworks       cocos2d lib
# |     | -- res              resources
# |     + -- src              packages + lib
# |           | -- {lib}
# |           | -- example
# |
# | -- .bowerrc               define ./packages
# | -- .gitignore             build, node_modules, tmp, packages
# | -- bower.json             module name, packages
# | -- csconfig.json          coffee-script project config
# | -- gulpfile.coffee        this workflow
# | -- gulpfile.json          gulpfile configuration
# | -- license.md
# | -- packages.json          output packages name
# + -- readme.md
#
# coffee -cb gulpfile.coffee > gulpfile.js
#
###
require('coffee-script')
require('coffee-script/register')

fs          = require('fs')
del         = require('del')
gulp        = require('gulp')
copy        = require('gulp-copy')
gutil       = require('gulp-util')
shell       = require('gulp-shell')
coffee      = require('gulp-coffee')
concat      = require('gulp-concat')
uglify      = require('gulp-uglify')
filter      = require('gulp-filter')
rename      = require('gulp-rename')
flatten     = require('gulp-flatten')
gh_pages    = require('gulp-gh-pages')
manifest    = require('gulp-manifest')
webserver   = require('gulp-webserver')
bowerDeps   = require('gulp-bower-deps')
maps        = require('gulp-sourcemaps')
json        = require('gulp-json-editor')
replace     = require('gulp-batch-replace')

project     = require('./package.json')
bower       = require('./bower.json')
bowerrc     = if fs.existsSync('./.bowerrc.json') then require('./.bowerrc.json') else false
cocos2d     = if fs.existsSync('./web/project.json') then require('./web/project.json') else false
config      = if fs.existsSync('./gulpfile.json') then require('./gulpfile.json') else false


packages = if cocos2d then 'src' else 'packages'
repository = if bowerrc then bowerrc.directory else 'bower_components'
projectName = project.name
authorName = project.author
libName = bower.name
dependencies = do ->
  dependencies =
    directory: repository
    deps: {}
  for name, version of bower.dependencies
    dependencies.deps[name] =
      version: version
      files: config.packages[name]
  return dependencies

###
task: build

  create the outputs
  create appcache manifest

###
gulp.task 'build', ['output'], ->
  gulp.src(['build/web/**/*.*'])
  .pipe(manifest(
      hash: true
      timestamp: true
      preferOnline: false
      network: ['*']
      filename: 'manifest.appcache'
      exclude: 'manifest.appcache'
    ))
  .pipe(gulp.dest('build/web'))


###
task: dist

  create the dist

###
gulp.task 'dist', ['dist0'], ->
  return gulp.src("build/#{libName}.min.js")
    .pipe(uglify(mangle:false))
    .pipe(gulp.dest("build/"))


###
task: serve

  serve the build folder

###
gulp.task 'serve', ->
  gulp.src('./build/web')
  .pipe webserver(
    livereload: false
    open: true
  )
  return

###
task: test

  serve the web folder

###
gulp.task 'test', ->
#  gulp.src('./web')
#  .pipe webserver(
#    livereload: true
#    open: true
#  )
  return

###
task: get

  get dependencies

###
gulp.task 'get', ['dependencies'], ->

  for dest, patch of config.patch
    for file, patch of patch
      "web/#{packages}/#{dest}/#{file}"
      console.log 'patch', "web/#{packages}/#{dest}/#{file}"
      gulp.src("web/#{packages}/#{dest}/#{file}")
      .pipe(replace(patch))
      .pipe(gulp.dest("web/#{packages}/#{dest}"))



###
task: publish

  publish to github gh-pages

###
gulp.task 'publish', ->
  return gulp.src("./build/web/**/*.*")
  .pipe(gh_pages())


###
task: android

  copy build to android project

###
gulp.task 'android', ->
  gulp.src([
    "build/web/#{packages}/**/*.*"
    "build/web/res/**/*.*"
    "build/web/index.html"
    "build/web/main.js"
    "build/web/project.json"
  ])
  .pipe copy("web/frameworks/runtime-src/#{libName}/web/src/main/assets/", prefix: 2)

gulp.task 'default', ['test']

###
task: clean

  deletes all build files
  
###
gulp.task 'clean', (next) ->
  del ['build'], next
  return


###
task: res

  copy the res files from
  lib/res to web/res
  
###
gulp.task 'res', ['clean'], ->
  return gulp.src([
    "lib/res/**/*.*"
  ]).pipe copy("web", prefix: 1)

###
task: output

  create the outputs
  copy lib/res to web
  copies the web folder to the build folder
  skip cocos2d runtime and tools

###
gulp.task 'output', ['js','res'], ->
   return gulp.src([
     "web/#{packages}/**/**/*.*"
     "!web/#{packages}/#{libName}/**/*"
     "web/res/**/*.*"
     "web/index.html"
     "web/license.md"
     "web/main.js"
     "web/manifest.json"
     "web/readme.md"
   ])
   .pipe copy('build')


###
task: js

  concat and minify all the js files

###
gulp.task 'js', ['clean'], ->
  # if this is a cocos2d project, use the project.json
  if cocos2d
    jsList = []
    source = []
    for name in cocos2d.jsList
      if name.indexOf("src/#{libName}") is 0
        source.push(name.replace("src/", "web/src/"))
      else
        jsList.push(name)
    jsList.push("src/#{libName}/#{libName}.min.js")

    gulp.src(source)
    .pipe(concat("#{libName}.min.js"))
    .pipe(uglify(mangle: false))
    .pipe(gulp.dest("build/web/src/#{libName}"))

    return gulp.src("web/project.json")
    .pipe(json((json) ->
        json.jsList = jsList
        json.showFPS = false
        json.classReleaseMode = true
        return json
      ))
    .pipe(gulp.dest("build/web"))

  else  # just wrap up all the files.
    return gulp.src([
      "web/#{packages}/#{libName}/**/*.*"
      "!web/#{packages}/#{libName}/**/*.map"
    ])
    .pipe(concat("#{libName}.min.js"))
    .pipe(uglify(mangle: false))
    .pipe(gulp.dest("build/web/#{packages}/#{libName}"))



###
task: dependencies

  copy the dependencies from the bower folder

###
gulp.task 'dependencies', ->

  gulp.src(bowerDeps(dependencies).deps)
  .pipe(flatten())
  .pipe(rename( (path) ->
      path.dirname += '/'+ path.basename.split('.')[0]
      return
    ))
  .pipe(gulp.dest("web/#{packages}/"))

gulp.task 'dist1', ->
  return gulp.src("web/#{packages}/#{libName}/**/*.js")
  .pipe(maps.init())
  .pipe(concat("#{libName}.js"))
  .pipe(maps.write("."))
  .pipe(gulp.dest("build/"))

gulp.task 'dist0', ['dist1'], ->
  return gulp.src("build/#{libName}.js")
  .pipe(rename("#{libName}.min.js"))
  .pipe(gulp.dest("build/"))

