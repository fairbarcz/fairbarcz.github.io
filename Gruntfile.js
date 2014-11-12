module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assets: 'assets',

        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    // sourcemap: true,
                    bundleExec: true
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    '<%= assets %>/css/styles.css': '<%= assets %>/css/styles.css'
                }
            }
        },
        watch: {
            dist: {
                files: '**/*.scss',
                tasks: ['compass', 'autoprefixer']
            }
        },
        imageoptim: {
            dist: {
                src: ['img']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['<%= assets %>/js/src/plugins.js', '<%= assets %>/js/src/main.js'],
                dest: '<%= assets %>/js/scripts.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: '<%= assets %>/js/scripts.js',
                dest: '<%= assets %>/js/scripts.js'
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '**/*.html',
                        '<%= assets %>/css/**/*.css',
                        '<%= assets %>/js/**/*.js'
                    ]
                },
                options: {
                    proxy: 'fairbarcz.work',
                    watchTask: true,
                    xip: true,
                    hostnameSuffix: '.xip.io'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', ['compass', 'autoprefixer', 'concat', 'uglify']);

};
