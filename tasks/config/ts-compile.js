module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        src: 'assets/app/**/*.ts'
      }
    }
  });
  grunt.loadNpmTasks('grunt-ts');
};