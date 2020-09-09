const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // 该插件的作用就是把 index.html 打包到你的 bundle.js 文件所属目录
        // 也就是说 bundle 到哪里，index.html 就到哪里
        // 同时这个插件也会自动在 index.html 中注入 script 引用链接
        // 而且引用的资源名称，也取决于你的 bundle 叫什么名字
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new vueLoaderPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    // 与 module 同级，根级配置
    devServer: {
        // 配置 webpack-dev-server 的 www 目录
        // 浏览器真正运行查看的是打包之后的结果
        // webpack-dev-server 为了提高打包效率，它把文件存储在了内存中，你看不见
        // 这里你只是在告诉 webpack-dev-server 让你的打包结果运行在虚拟目录 dist 中
        // 那这个时候你的打包结果中的 index.html 去加载资源的时候确实需要相对于 dist 来找
        // ./ 的话，webpack-dev-server 就会直接把资源打包到项目根目录下
        // 但是主意：你也看不见它
        // 那这个时候你在 index.html 文件中请求的资源就是相对于项目根目录了
        contentBase: './',
        hot: true
    },
    externals: {
        // key 就是包名
        // value 是全局的 Vue 导出的接口
        vue: 'Vue',
        'vue-router': 'VueRouter'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', // 3. 根据模块生成 style 节点插入 head 中
                    'css-loader',   // 2. 再把 css 转成 JavaScript 模块
                    'less-loader'   // 1. 先把 less 转成 css
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,  // 不转换 node_modules 中的文件模块
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    }
}