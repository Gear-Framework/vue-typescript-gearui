const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js' 
            }
        },
        entry: ['./src/polyfills.ts', './src/main.ts'],
        externals: {
            jquery: "window.jQuery",
            lodash: {
                commonjs: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_'
            }
        }
    },
    chainWebpack:(config) => {
        config.plugin("html").use(HtmlWebpackPlugin, [{
            inject: "head",
            template: "./public/index.html",
          }]);
    }
}