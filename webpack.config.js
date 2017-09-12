const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
require("babel-polyfill");

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    //定义页面的入口, 因为js中将要使用es6语法, 所以这里需要依赖 babel 垫片
    entry: {
        index: ['babel-polyfill', './src/index.js']
    },
    output: {
        path: resolve('dist'), // 指示发布目录
        chunkFilename: 'js/[name].[chunkhash:8].js',
        filename: 'js/[name].[chunkhash:8].js' //指示生成的页面入口js文件的目录和文件名, 中间包含8位的hash值
    },
    externals: {
        //video.js 作为外部资源引入
        'video.js': 'videojs'
    },
    //下面给一些常用组件和目录取别名, 方便在js中 import
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'jquery$': 'admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components')
        }
    },
    module: {
        //配置 webpack 加载资源的规则
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src')]
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.less$/,
            loader: "less-loader"
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
            test: /\.(swf|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader?limit=10000&name=media/[name].[hash:8].[ext]'
        }]
    },
    plugins: [
        //引入全局变量
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            "window.$": 'jquery'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/vendor-manifest.json')
        }),
        new CopyWebpackPlugin([
            { from: 'dll', ignore: ['template.html', 'vendor-manifest.json'] }
        ]),
        //编译前先清除 dist 发布目录
        new CleanWebpackPlugin(['dist']),
        //生成视频广场首页, 在这个页面中自动引用入口 index --> dist/js/index.[chunkhash:8].js
        //以 src/index.html 这个文件作为模板
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: '视频广场',
            inject: true, // head -> Cannot find element: #app
            chunks: ['index'],
            template: './dll/template.html',
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ]
};