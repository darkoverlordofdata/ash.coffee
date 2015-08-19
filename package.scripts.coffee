###
#+--------------------------------------------------------------------+
#| package.scripts
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2014-2015
#+--------------------------------------------------------------------+
#|
#| package.scripts
#|
#| ashteriods is free software; you can copy, modify, and distribute
#| it under the terms of the MIT License
#|
#+--------------------------------------------------------------------+
###

fs = require('fs')

# projectTypes enum:
JavaScript    = 0   # javascript
TypeScript    = 1   # typescript
CoffeeScript  = 2   # coffeescript
BabelScript   = 3   # es6


###
# Generate package.script
###
module.exports = (project, options = {}) ->

  # get project config
  csconfig = if fs.existsSync('./csconfig.json') then require('./csconfig.json') else files: []
  jsconfig = if fs.existsSync('./jsconfig.json') then require('./jsconfig.json') else files: []
  tsconfig = if fs.existsSync('./tsconfig.json') then require('./tsconfig.json') else files: []

  projectType = if tsconfig.files.length>0 then TypeScript else if csconfig.files.length>0 then CoffeeScript else JavaScript
  isCocos2d = fs.existsSync('./web/project.json')

  ###
  # VS Code ctrl-shift-b
  ###
  _vscode_build: do ->
    switch projectType
      when TypeScript then "tsc --watch"
      when CoffeeScript then "coffee -o web/src/#{project.name} -wcm lib "

  ###
  # Android
  # Build the android asset folder
  #
  ###
  android: do ->
    options.compile ?= 'WHITESPACE_ONLY'
    
    step = []

    if isCocos2d
      files = getCocos2dFiles(false).join(' LF ')
      step.push("""
        cp -f lib/src/cclib-rt.js web/src/#{project.name}/cclib-rt.js
        cp -f web/main.js ./web/frameworks/runtime-src/proj.android-studio/app/assets/main.js
        cp -f web/project_android.json ./web/frameworks/runtime-src/proj.android-studio/app/assets/project.json
      """.split('\n').join(' && '))

      if options.compile?
        step.push("cat #{files} | java -jar packages/closure-compiler/lib/vendor/compiler.jar --warning_level=QUIET --compilation_level #{options.compile} --js_output_file ./web/frameworks/runtime-src/proj.android-studio/app/assets/#{project.name}.js")
      else
        step.push("""
          cp -fr web/src ./web/frameworks/runtime-src/proj.android-studio/app/assets/src
        """.split('\n').join(' && '))

      return step.join(' && ')
    else # TBD - cordova?
      return ''

  ###
  # Build
  # build the project
  #
  ###
  build: do ->
    options.compile ?= 'ADVANCED_OPTIMIZATIONS'
    
    step = []

    if isCocos2d
      ###
      # Use cocos2d project.json to build the target
      ###
      files = getCocos2dFiles(true).join(' LF ')
      step.push(project.config.build.join(' && ')) if project.config.build.length
      if options.compile?
        step.push("cat #{files} | java -jar packages/closure-compiler/lib/vendor/compiler.jar --jscomp_error=checkTypes --warning_level=QUIET --compilation_level #{options.compile} --js_output_file build/web/main.js")
      else
        step.push("""
          cp -fr web/src build/web/src
          mkdir build/web/frameworks
          cp -fr web/frameworks/cocos2d-html5 build/web/frameworks/cocos2d-html5
          """.split('\n').join(' && '))
      return step.join(' && ')
      
    
    else if projectType is CoffeeScript
      ###
      # Build after recompiling all coffeescript together
      ###
      step.push(project.config.build.join(' && ')) if project.config.build.length
      files = require('./csconfig.json').files.join(" LF ")
      step.push("cat #{files} | coffee -cs > build/#{project.name}.js")
      step.push("cat #{files} | coffee -cs | java -jar packages/closure-compiler/lib/vendor/compiler.jar --compilation_level #{options.compile} --js_output_file build/#{project.name}.js")
      return step.join(' && ')
      
    else
      ###
      # Build directly from the raw transpiled javascript
      ###
      step.push(project.config.build.join(' && ')) if project.config.build.length
      files = require('./jsconfig.json').files.join(" LF ")
      step.push("cat #{files} > build/#{project.name}.js")
      step.push("cat #{files} | java -jar packages/closure-compiler/lib/vendor/compiler.jar --compilation_level #{options.compile} --js_output_file build/#{project.name}.js")
      return step.join(' && ')
      
  ###
  # Clean
  # delete the prior build items
  #
  ###
  clean: """
    rm -rf build/*
    mkdir build/web
    mkdir build/lib
  """

  ###
  # Closure Build
  # build using the closure-compiler
  #
  ###
  closurebuild: """
    python  packages/google-closure-library/closure/bin/build/closurebuilder.py \
      --root=packages/google-closure-library/ \
      --root=./goog/lib \
      --root=./goog/example \
      --input=./goog/example/index.js \
      --namespace=asteroids \
      --output_mode=compiled \
      --compiler_jar=packages/closure-compiler/lib/vendor/compiler.jar \
      --compiler_flag='--compilation_level=ADVANCED_OPTIMIZATIONS' \
      --compiler_flag='--define=goog.userAgent.ASSUME_WEBKIT=true' \
      --compiler_flag='--create_source_map=web/#{project.name}.js.map' \
      --compiler_flag='--warning_level=QUIET' \
      --compiler_flag='--language_in=ECMASCRIPT5' \
      > web/#{project.name}.min.js
  """

  ###
  # Deploy
  # copy the output to downstream project
  #
  ###
  deploy: """
    cp -rf web/res web/frameworks/runtime-src/proj.android-studio/app/assets
    cp -rf web/src web/frameworks/runtime-src/proj.android-studio/app/assets
    cp -f web/main.js web/frameworks/runtime-src/proj.android-studio/app/assets
    cp -f web/project.json web/frameworks/runtime-src/proj.android-studio/app/assets
  """

  ###
  # Deps Writer
  # collect dependencies for closure compiler
  #
  ###
  depswriter: """
    python packages/google-closure-library/closure/bin/build/depswriter.py \
      --root_with_prefix='goog/example ../../../../goog/example' \
      --root_with_prefix='goog/lib ../../../../goog/lib' \
      --root_with_prefix='web ../../../../web' \
      > web/#{project.name}.dep.js
  """

  ###
  # Folder
  # ensure the folder structure
  #
  ###
  folder: """
    mkdir build/web
    mkdir build/lib
    cp -fr lib/src build/lib
    cp -fr web/res build/web
  """

  ###
  # Get
  # process bower dependencies
  #
  ###
  get: """
    bower-installer
    cake get
  """

  ###
  # Publish
  # publish gh-pages
  #
  ###
  publish: "gulp gh-pages"

  ###
  # JsDoc
  # create documentation
  #
  ###
  jsdoc: """
    jsdoc goog/lib -r \
      --template ../jaguarjs-jsdoc \
      --configure ./conf.json \
      --readme ./readme.md \
      --destination ./build/web
  """

  ###
  # Manifest
  # create appcache manifest for build
  #
  ###
  manifest: "gulp manifest"

  ###
  # Post Build
  # update the cocos2d project file?
  #
  ###
  postbuild: do ->
    cmd = "cp build/#{project.name}.js build/web"
    if isCocos2d
      cmd += "\ncp -f web/project_build.json build/web/project.json"
    return cmd

  ###
  # Post Closure Build
  # generate dep.js
  #
  ###
  postclosurebuild: "npm run depswriter"

  ###
  # Post Install
  # get the dependencies
  #
  ###
  postinstall: """
    bower install
    npm run get
  """

  ###
  # Pre Android
  # prepare for android build
  #
  ###
  preandroid: """
    npm run predeploy
    npm run transpile
    npm run resources
    cp -fr web/res ./web/frameworks/runtime-src/proj.android-studio/app/assets
  """

  ###
  # Pre Build
  # prepare for build
  #
  ###
  prebuild: """
    npm run clean -s
    npm run transpile
    npm run resources
    npm run folders
  """

  ###
  # Pre Closure Build
  # convert output for closure
  #
  ###
  preclosurebuild: "coffee tools/convert.coffee"

  ###
  # Pre Deploy
  # remove prior deployment
  #
  ###
  predeploy: """
    rm -rf web/frameworks/runtime-src/proj.android-studio/app/assets/res
    rm -rf web/frameworks/runtime-src/proj.android-studio/app/assets/src
    rm -f web/frameworks/runtime-src/proj.android-studio/app/assets/main.js
    rm -f web/frameworks/runtime-src/proj.android-studio/app/assets/project.json
  """

  ###
  # Resources
  # copy the resources
  #
  ###
  resources: do ->
    if project.config.resources?
      return project.config.resources.join(' && ')
    else 
      return ''

  ###
  # Sart
  # run the dev version of the app
  #
  ###
  start: "node ./tools/server.js web"

  ###
  # Serve
  # run the build version of the app
  #
  ###
  serve: "node ./tools/server.js build/web"

  ###
  # Test
  # run the unit tests
  #
  ###
  test: "NODE_ENV=test mocha --compilers coffee:coffee-script --require test/test_helper.js --recursive"

  ###
  # Transpile
  #
  ###
  transpile: do ->
    switch projectType
      when TypeScript then "tsc"
      when CoffeeScript 
        step = []
        step.push("coffee -o web/src/#{project.name} -cm lib")
        step.push("coffee -o web/src/example -cm example") if fs.existsSync('./example')
        return step.join(' && ')
        


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

  return [] unless fs.existsSync("./web/project.json")

  cocos2d = require("./web/project.json")

  root: "./web/#{cocos2d.engineDir}"
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

  files.push("./web/main.js") unless standalone
  return files


