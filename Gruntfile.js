module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        express: {
            options: {},
            web: {
                options: {
                    script: 'server.js'
                }
            }
        },

        browserify: {
            dev: {
                src: './src/js/app.js',
                dest: 'public/app.js',
                options: {
                    watch: true,
                    keepAlive: true,
                    browserifyOptions: {
                        debug: true
                    }
                }
            },
            dist: {
                src: './src/js/app.js',
                dest: 'public/app.js'
            }
        },

        less: {
            dist: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'public/app.css': 'src/less/styles.less'
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'public/app.js': ['./public/app.js']
                }
            }
        },

        watch: {
            app: {
                options: {
                    livereload: true
                },
                files: [
                    'public/**/*.js',
                    'public/**/*.html',
                    'public/**/*.css'
                ]
            },
            less: {
                files: [
                    'src/less/**/*.less'
                ],
                tasks: [
                    'less'
                ],
                options: {
                    nospawn: true
                }
            },
            server: {
                files: [
                    'server.js',
                    'server/**/*.js'
                ],
                tasks: [
                    'express:web'
                ],
                options: {
                    nospawn: true,
                    atBegin: true
                }
            }
        },

        parallel: {
            web: {
                options: {
                    stream: true
                },
                tasks: [
                    {
                        grunt: true,
                        args: ['watch:app']
                    },
                    {
                        grunt: true,
                        args: ['watch:server']
                    },
                    {
                        grunt: true,
                        args: ['watch:less']
                    },
                    {
                        grunt: true,
                        args: ['browserify:dev']
                    }
                ]
            }
        }

    });

    grunt.registerTask('server', [
        'parallel:web'
    ]);

    grunt.registerTask('dist', [
        'browserify:dist', 'less', 'uglify'
    ]);

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-parallel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

}
