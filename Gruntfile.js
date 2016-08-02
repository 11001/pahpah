module.exports = function(grunt) {
    var vendors = ['jquery', 'underscore', 'backbone', 'backbone.marionette', 'backbone.validation'];

    grunt.initConfig({
        browserify: {
            app: {
                src: 'resources/assets/js/main.js',
                dest: 'public/js/app.js',
                options: {
                    debug:true,
                    extensions: ['.hbs'],
                    transform: ['hbsfy'],

                }
            },

            vendors: {
                files: {
                    'public/js/vendors.js': []
                },
                options: {
                    vendors: vendors
                }
            }
        },
        uglify: {
           build: {
               src: ['public/js/new_app.js'],
               dest: 'public/js/new_app.js'
           }
        },

        concat: {
            options: {
                separator: '\n',
            },
            css: {
                src: ['resources/assets/**/*.css', 'bower_components/bootstrap/dist/css/bootstrap.css'],
                dest: 'public/css/style.css'
            },
            js: {
                src: [
                    'bower_components/moment/min/moment.min.js'
                ],
                dest: 'public/js/bower_vendors.js'
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['resources/assets/js/**/*.js'],
                tasks: ['browserify:app']
            },
            styles: {
                files: ['resources/asssets/css/**/*.css'],
                tasks: ['browserify:app']
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // Task definition
    grunt.registerTask('default', ['browserify:app']);
    grunt.registerTask('stage', ['browserify:app', 'browserify:vendors', 'concat']);
    grunt.registerTask('prod', ['browserify:app', 'browserify:vendors', 'concat', 'uglify']);
    grunt.registerTask('dev', ['stage', 'watch']);



};