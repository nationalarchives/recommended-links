module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            all: ['tests/*.html']
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['bower_components/jquery/dist/jquery.js', 'src/app.js'],
                dest: 'dist/app.js',
            },
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
                files: ['src/app.js'],
                tasks: ['default'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['qunit', 'concat', 'uglify']);

};