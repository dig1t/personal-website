module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// Tasks
		sass: { // Convert sass file into css
			dist: {
				options: {
					sourcemap: 'none'
				},
				files: [{
					expand: true,
					cwd: 'src/scss',
					src: [
						'admin.scss',
						'main.scss'
					],
					dest: 'public/compiled',
					ext: '.css'
				}]
			}
		},
		
		concat: { // Concatenate required css files with compiled sass file
			dist: {
				src: [
					'public/compiled/main.css',
					'src/scss/*.css'
				],
				dest: 'public/compiled/build.css'
			}
		},
		
		cssmin: { // Minify admin and build files
			dist: {
				files: [{
					expand: true,
					cwd: 'public/compiled',
					src: [
						'admin.css',
						'build.css'
					],
					dest: 'public/compiled',
					ext: '.min.css'
				}]
			}
		},
		
		clean: { // Remove uncompressed files
			dist: {
				src: [
					'public/compiled/*.css',
					'!public/compiled/*.min.css'
				]
			}
		},
		
		watch: { // Watch for file changes
			css: {
				files: ['src/scss/*.scss', 'src/scss/pages/*.scss'],
				tasks: ['sass', 'concat', 'cssmin', 'clean'],
				options: {
					atBegin: true,
					interrupt: true
				}
			}
		}
	})
	
	const tasks = [
		'grunt-contrib-sass',
		'grunt-contrib-concat',
		'grunt-contrib-cssmin',
		'grunt-contrib-uglify',
		'grunt-contrib-clean',
		'grunt-contrib-watch'
	]
	
	tasks.map(task => {
		grunt.loadNpmTasks(task)
	})
	
	grunt.registerTask('default', ['watch'])
}