gulp    = require 'gulp'
util    = require 'gulp-util'
coffee  = require 'gulp-coffee'
include = require 'gulp-include'
concat  = require 'gulp-concat'

jquery = require 'jquery'

gulp.task 'scripts', ->
	gulp.src('src/**/*.coffee')
		.pipe(concat 'item.coffee')
    .pipe(do coffee)
  	.pipe(gulp.dest 'dist')

gulp.task 'jquery', ->
	gulp.src(['node_modules/jquery/dist/jquery.js', 'dist/item.js'])
		.pipe(concat 'application.js')
		.pipe(gulp.dest './')

gulp.task 'default', ['scripts', 'jquery']
gulp.watch 'src/**/*.coffee', ['scripts']
