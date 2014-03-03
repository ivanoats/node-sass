'use strict';
module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');

  // I had to add this below in addition to Dale's instructions
  grunt.registerTask('watch', ['watch']);

  grunt.registerTask('default', ['sass']);
};
