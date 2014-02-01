module.exports = function(grunt) {
  //Configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! data-metrics <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) | Marlos Carmo - https://github.com/marloscarmo/data-metrics | Free to use under terms of MIT license */\n'
      },

      all: {
        files: {
          'data-metrics.min.js': 'data-metrics.js'
        }
      }
    }
  });

  //Dependencies.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //Tasks.
  grunt.registerTask('default', ['uglify']);
};