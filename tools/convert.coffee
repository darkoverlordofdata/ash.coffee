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
			deps = []
			skip = []
			for name, index in line[4...-1].split(/\s*,\s*/)
				ivar = lineno+1+index
				dep = src[ivar].replace(/\w+\s*=\s*(.*);/, ($0, $1) -> $1)
				names.push(name)
				vars.push("goog.require('#{dep}');")
				deps.push(dep)
				
			for dep, index in vars
				src[lineno+index] = dep
				skip.push(lineno+index)
			src[lineno+vars.length] = "";
			skip.push(lineno+vars.length)
	
			
	
	if found
		console.log ns
		for line, lineno in src
			if skip.indexOf(lineno) is -1
				for name, index in names
					rx = new RegExp("new #{name}\\b", 'g')
					line = line.replace(rx, 'new ' +deps[index])
					# line = line.replace("new #{name}", "new #{deps[index]}")
					if line isnt src[lineno]
						src[lineno] = line
	
	return src.join('\n')
				
###
 * Compile coffeescript and process each output
 *
###
exec "coffee -o ./cc --no-header -cb ./lib", (err, out) ->
	throw err if err
	deps = []
	for file in config.files
		
		if file.indexOf('_') is -1
			ns = file.replace(/^web\/src\//, '').replace(/\.js$/,'').replace(/\//g,'.')
			unless /\.prolog$/.test(ns)
				deps.push(ns)
				src = fs.readFileSync(file.replace('web/src/ash', './cc'), 'utf8')
				src = src.replace(/'use strict';/, '')
				src = c2c.fix(src, addGenerateByHeader: false)	
				src = dependencies(ns, src)
				src = """
				goog.provide('#{ns}');
				#{src}
				"""
				fs.writeFileSync(file.replace('web/src/ash', './cc'), src)
	

	out = ["goog.provide('ash');"]
	for dep in deps
		out.push("goog.require('#{dep}');")
	fs.writeFileSync('cc/ash.js', out.join('\n'))