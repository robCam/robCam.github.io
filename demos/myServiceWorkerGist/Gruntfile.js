module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /* Handle Images */

        responsive_images: {
            icons : {
                options: {
                    sizes: [{
                        width: 36,
                        height: 36
                    }, {
                        width: 48,
                        height: 48
                    }, {
                        /*name: 'large',*/
                        width: 60,
                        height: 60
                        /*suffix: '_x2',
                        quality: 60*/
                    }, {
                        width: 72,
                        height: 72
                    }, {
                        width: 76,
                        height: 76
                    }, {
                        width: 96,
                        height: 96
                    }, {
                        width: 120,
                        height: 120
                    }, {
                        width: 144,
                        height: 144
                    }, {
                        width: 152,
                        height: 152
                    }, {
                        width: 180,
                        height: 180
                    }, {
                        width: 192,
                        height: 192
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'src/images/launcher-icon/',
                    src: ['**/*.png'],
                    dest: './build/images/launcher-icons/'
                }]
            }
        }

    });
        
    grunt.loadNpmTasks('grunt-responsive-images');

    // Default
    grunt.registerTask('default', [
        'responsive_images:icons'
    ]);

};
