module.exports = function (grunt) {
	grunt.registerTask('default', [
		'ts',
		'compileAssets',
		'linkAssets',
		'watch'
	]);
};
