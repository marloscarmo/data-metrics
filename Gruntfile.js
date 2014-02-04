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
          'dist/data-metrics.min.js': 'src/data-metrics.js'
        }
      }
    },

    // Release task
    bump: {
      options: {
        files: ['package.json', 'bower.json', 'README.md'],
        updateConfigs: ['pkg'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'], // '-a' for all files
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin master',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
      }
    }
  });

  //Dependencies.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bump');

  //Tasks.
  grunt.registerTask('default', ['uglify']);

  grunt.registerTask('release', [
    'bump-only',
    'uglify',
    'bump-commit'
  ]);
};
