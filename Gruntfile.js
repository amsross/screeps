
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-screeps');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    env: {
      dev: {
        src: ".env"
      }
    },
    screeps: {
      options: {
        email: "<%= EMAIL %>",
        password: "<%= PASSWORD %>",
        branch: 'default',
        ptr: false
      },
      dist: {
        src: ['dist/*.js']
      }
    },
    watch: {
      scripts: {
        files: ['dist/*.js'],
        tasks: [
          'env:dev',
          'setenv',
          'screeps'
        ]
      }
    }
  });
  
  grunt.registerTask('setenv', 'Load env vars', function() {
    grunt.config('EMAIL', process.env.EMAIL)
    grunt.config('PASSWORD', process.env.PASSWORD)
  });

  grunt.registerTask('default', [
    'env:dev',
    'setenv',
    'screeps',
    'watch'
  ]);
};
