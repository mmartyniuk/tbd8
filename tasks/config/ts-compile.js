module.exports = function(grunt) {
  grunt.config.set('ts', {
		default: {
        src: ['assets/app/**/*.ts', '!assets/app/typings/*.ts']
    }
	});
  grunt.loadNpmTasks('grunt-ts');
};