#+--------------------------------------------------------------------+
#| Gruntfile.coffee
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
# test  - run tests
# zip   - create build/{{project}}.zip and copy to device
#
# build - build lib sources to web/packages/{{lib}}
# get   - gets package dependencies using bower
# deps  - list dependencies
#
#
# manually copy required bits from packages/module to web/packages/module
#
# project
# | -- build                  output folder for zip
# | -- lib                    defines this package
# | -- node_modules           npm dependencies
# | -- packages               bower external packages
# | -- (tmp)
# | -- web                    source
# |     | -- packages         packages + lib
# |     | -- index.html
# |     + -- main.js          starts lib.main()
# |
# | -- .bowerrc               define ./packages
# | -- .gitignore             build, node_modules, tmp, packages
# | -- bower.json             module name, packages
# | -- Gruntfile.coffee       this workflow
# | -- license.md
# | -- package.json           output package name
# + -- readme.md
#
#
$package = require("./package.json")
$bower = require("./bower.json")

$projectName = $package.name
$libName = $bower.name
$packageName = $libName.toLowerCase()



module.exports = ->
  @initConfig
    pkg: '<json:package.json>'

    ###
    Compile lib to tmp
    ###
    coffee:
      compile:
        options:
          bare: true
          sourceMap: true
        expand: true
        flatten: false
        cwd: __dirname
        src: ["lib/**/*.coffee", "example/**/*.coffee"]
        dest: 'tmp/'
        ext: ".js"

    ###
    Package up tmp
    ###
    browserify:
      dist:
        options:
          browserifyOptions:
            debug: true
            standalone: $libName
        cwd: __dirname
        src: ["tmp/lib/index.js"]
        dest: "web/packages/#{$packageName}/#{$packageName}.js"
      example:
        options:
          browserifyOptions:
            debug: true
            standalone: 'Example'
        cwd: __dirname
        src: ["tmp/example/index.js"]
        dest: "web/packages/example/example.js"

    ###
    Minify
    ###
    uglify:
      dist:
        cwd: __dirname
        src: ["web/packages/#{$packageName}/#{$packageName}.js"]
        dest: "web/packages/#{$packageName}/#{$packageName}.min.js"

    ###
    Copy Resources
    ###
    copy:
      res:
        expand: true
        cwd: "lib"
        src: "res/**/*.*"
        dest: "web/packages/#{$packageName}/"

    ###
    Run the tests
    ###
    simplemocha:
      test:
        src: 'test/**/*.coffee'
        options:
          globals: ['expect']
          timeout: 3000
          ui: 'bdd'
          reporter: 'tap'

    ###
    Delete temporary files
    ###
    clean:
      build:
        ["tmp/"]

    ###
    Create archive package
    ###
    compress:
      cocoonjs:
        options:
          archive: "build/#{$projectName}.zip"
        expand: true
        cwd: "web/"
        src: ["**/*.*"]
        dest: "/"

    ###
    Copy archive to device
    ###
    adbPush:
      cocoonjs:
        cwd: __dirname
        src: ["build/#{$projectName}.zip"]
        dest: "/sdcard/"


    ###
      get packages
      ex: add to bower.json
          "packages": {
            "jquery": "jquery/dist/*.js"
          }
    ###
    bowercopy:
      options:
        destPrefix: 'web/packages/'
      packages:
        files: $bower.packages

  ###
  Load grunt plugins
  ###
  @loadNpmTasks 'grunt-adb-tools'
  @loadNpmTasks 'grunt-browserify'
  @loadNpmTasks 'grunt-bowercopy'
  @loadNpmTasks 'grunt-contrib-clean'
  @loadNpmTasks 'grunt-contrib-copy'
  @loadNpmTasks 'grunt-contrib-coffee'
  @loadNpmTasks 'grunt-contrib-compress'
  @loadNpmTasks 'grunt-contrib-uglify'
  @loadNpmTasks 'grunt-simple-mocha'

  ###
    Register task aliases
  ###
  @registerTask 'test', 'simplemocha'
  @registerTask 'zip', ['compress', 'adbPush']

  @registerTask 'build', ['clean','coffee', 'browserify', 'uglify', 'copy']
  @registerTask 'get', 'bowercopy'
  @registerTask 'deps', ->

    rep = (c, n) -> Array(n).join(c)
    tab = (s) -> s+rep(' ', 16-s.length)

    console.log "\n#{$bower.name} dependencies"
    console.log "\n"+rep('-', 60)
    console.log "Require (npm)"
    console.log rep('-', 60)
    for name, vers of $package.dependencies
      console.log "#{tab(name)} #{vers}"
    console.log "\n"+rep('-', 60)
    console.log "Packages (bower)"
    console.log rep('-', 60)
    for name, vers of $bower.dependencies
      console.log "#{tab(name)} #{vers}"
    return