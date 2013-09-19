/*
 * grunt-readme
 * https://github.com/assemble/grunt-readme
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {jshintrc: '.jshintrc'},
      all: ['Gruntfile.js', 'tasks/*.js', '<%= nodeunit.tests %>']
    },

    // The "readme" task
    readme: {
      options: {
        sections: 'tasks/templates/sections',
        replacements: [
          {
            pattern: /(Getting)/gi,
            replacement: 'Going'
          }
        ]
      //   metadata: 'test/fixtures/metadata.json'
      //   // templates: ['tasks/templates']
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Run this task, then test the results.
  grunt.registerTask('test', ['readme', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'readme']);

};
