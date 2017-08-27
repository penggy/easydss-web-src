const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    entry: {
        //提取共用组件, 打包成 vendor.js
        vendor: ['jquery', 'vue', 'vuex', 'babel-polyfill',
            'font-awesome/css/font-awesome.css', 'admin-lte/bootstrap/css/bootstrap.css',
            'admin-lte/dist/css/AdminLTE.css', 'admin-lte/dist/css/skins/_all-skins.css',
            'admin-lte/bootstrap/js/bootstrap.js', 'admin-lte/dist/js/app.js']
    },
    output: {
        path: resolve('dll'),
        filename: 'js/[name].[chunkhash:8].js',
        library: '[name]_library'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'jquery$': 'admin-lte/plugins/jQuery/jquery-2.2.3.min.js'
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader?limit=10000&name=images/[name].[hash:8].[ext]'
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader?limit=10000&name=fonts/[name].[hash:8].[ext]'
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader?limit=10000&name=media/[name].[hash:8].[ext]'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            "window.$": 'jquery'
        }),
        new CleanWebpackPlugin(['dll']),
        new CopyWebpackPlugin([
            { from: 'src/externals' }
        ]),
        new webpack.DllPlugin({
            path: resolve("dll/[name]-manifest.json"),
            name: "[name]_library",
            context: __dirname
        }),
        new HtmlWebpackPlugin({
            filename: 'template.html',
            title: '<%= htmlWebpackPlugin.options.title %>',
            inject: 'head',
            chunks: ['vendor'],
            template: './src/template.html',
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })        
    ]
};