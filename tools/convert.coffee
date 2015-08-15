###
 * Using the outputs from coffeescript
 * create a closure-compiler ready source
 *
###
fs = require('fs')
c2c = require('coffee2closure')
config = require('../jsconfig.json')
exec = require('child_process').exec

###
 * Convert a file name to a valid namespace 
###
getNamespace = (file) ->
	ns = file.replace(/^web\/src\//, '').replace(/\.js$/,'').replace(/\//g,'.')
	path = ns.split('.')
	# convert the filename from snake to camel
	name = path.pop().split('_')
	for section, index in name
		name[index] = section.charAt(0).toUpperCase() + section.substr(1)
	path.push(name.join(''))
	ns = path.join('.')
	return ns
	
###
 * Look for specific externals:
 * 1 - superclass
 * 2 - if superclass is node, get components 
 * 
 * todo: fix this by explitly importing all dependencies
###	
externals = (ns, src) ->
	requires = []

	# is there a superclass?
	rx = new RegExp("goog.inherits\\(#{ns},\\s*(.*)\\);")
	src.replace(rx, ($0, $1) -> requires.push($1))
	if requires.length and requires[0] is 'ash.core.Node'
		# check node for components list
		src.replace(/\.components\s*=\s*\{([\s\S]*)\};/, ($0, $1) -> 
			lines = $1.split('\n')
			lines.pop()
			lines.shift()
			for line in lines
				line.replace(/.*\:\s*([\w.]*),?/, ($0, $1) -> requires.push($1))
			
		)
		
	for ext, index in requires
		requires[index] = "goog.require('#{ext}');"
		
	return requires.join('\n')
	
###
 * Analyze the dependencies
 * Generate the goog.require statements
 * Expand imported class names
###
dependencies = (ns, src) ->
	
	state = 0
	found = false
	src = src.split('\n')
	for line, lineno in src
		break if line.indexOf("#{ns} = function") isnt -1
		if line[0..3] is 'var '
			found = true
			
			vars = []
			names = []
			deps = {}
			skip = []
			for name, index in line[4...-1].split(/\s*,\s*/)
				ivar = lineno+1+index
				src[ivar].replace(/(\w+)\s*=\s*(.*);/, ($0, $1, $2) -> 
					names.push($1)
					vars.push("goog.require('#{$2}');")
					deps[$1] = $2
				)
				
				
			for dep, index in vars
				src[lineno+index] = dep
				skip.push(lineno+index)
			src[lineno+vars.length] = "";
			skip.push(lineno+vars.length)
			break			
	
	if found
		for line, lineno in src
			if skip.indexOf(lineno) is -1
				for name in names
				
					rx = new RegExp("new #{name}\\b", 'g')
					line = line.replace(rx, 'new ' +deps[name])
					
					rx = new RegExp(", #{name},", 'g')
					line = line.replace(rx, ", #{deps[name]},")
					
					rx = new RegExp("\\(#{name}\\)", 'g')
					line = line.replace(rx, "(#{deps[name]})")
					
					rx = new RegExp("\\b#{name}\\.", 'g')
					line = line.replace(rx, "#{deps[name]}.")
					
					if line isnt src[lineno]
						src[lineno] = line
	
	return src.join('\n')
				

###
 * Convert coffeescript outputs to goog
 *
 * @param {string} name of app
 * @param {string} root folder 
###
convert = (name, root=name, section=name, next) ->
		
	exec "coffee -o ./cc/#{root} --no-header -cb ./#{root}", (err, out) ->
		throw err if err
		deps = []
		for file in config[section]
			
			unless file.indexOf('prolog.js') isnt -1
				ns = getNamespace(file)
				alt = ns.replace('example', 'asteroids')
				deps.push(ns)
				src = fs.readFileSync(file.replace("web/src/#{name}", "./cc/#{root}"), 'utf8')
				src = src.replace(/'use strict';/, '')
				src = c2c.fix(src, addGenerateByHeader: false)	
				src = dependencies(ns, src)
				ext = externals(alt, src)
				
				src = """
				goog.provide('#{alt}');
				#{ext}
				#{src}
				"""
				# src = src.replace(/goog.require\('null'\);/g, '')
				fs.writeFileSync(file.replace("web/src/#{name}", "./cc/#{root}"), src)
	
	
		#
		# write new prolog
		#
		alt = name.replace('example', 'asteroids')
		out = ["goog.provide('#{alt}');"]
		for dep in deps
			unless dep is 'example.Index'
				alt = dep.replace('example', 'asteroids')
				out.push("goog.require('#{alt}');")
		out.push("new asteroids.Main();") unless next?
		fs.writeFileSync("cc/#{root}/index.js", out.join('\n'))
		next?()

convert 'ash', 'lib', 'files', -> convert 'example'
	