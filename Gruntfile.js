module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        copy: {
            app: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/',
                    src: ['**/*.css'],
                    dest: 'app/build/'
                }]
            }
        },
        webpack: {
            app: {
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                entry: './app/client.js',
                output: {
                    path: './app/build/js',
                    filename: 'client.js'
                },
                module: {
                    loaders: [
                        { test: /\.css$/, loader: 'style!css' },
                        { test: /\.jsx$/, loader: 'jsx-loader' }
                    ]
                },
                watch: true
            }
        },
        nodemon: {
            app: {
                script: './app/server.js',
                options: {
                    ignore: ['build/**'],
                    ext: 'js,jsx'
                }
            }
        },
    });

    grunt.registerTask('default', ['copy:app', 'webpack:app', 'nodemon:app']);
};