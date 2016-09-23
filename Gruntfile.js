module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'tests/**/*.js', 'src/**/*.js']
        },
        qunit: {
            all: ['tests/*.html']
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/link_data.js', 'src/recommended_links.js', 'src/app.js'],
                dest: 'dist/app.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dist/app.js',
                dest: 'dist/app.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['src/*.js', 'tests/*.js'],
                tasks: ['jshint', 'concat', 'uglify', 'qunit'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'qunit', 'watch']);

};