let mix = require('laravel-mix')

class Riot {
    name() {
        return 'riot'
    }

    webpackRules() {
        return {
            test: /\.riot$/,
            exclude: /node_modules/,
            use: [{
                loader: '@riotjs/webpack-loader',
                options: {
                    hot: false, // set it to true if you are using hmr
                    // add here all the other @riotjs/compiler options riot.js.org/compiler
                    // template: 'pug' for example
                }
            }]
        }
    }
}

mix.extend('riot', new Riot());
