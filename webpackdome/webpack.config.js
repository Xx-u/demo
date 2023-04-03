const htmlWebpackPlugin = require('html-webpack-plugin');   //  引入html-webpack-plugin插件

module.exports = {
    entry: './src/scripts/index.js',   // 打包入口
    output: {
        path: __dirname + '/dist',    // 输出路径
        filename: 'index.js'     // 输出文件名
    },
    module: {
        rules: [    // 其中包含各种loader的使用规则
            {
                test: /\.css$/,  // 正则表达式，表示打包.css后缀的文件
                use: ['style-loader', 'css-loader']   // 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
            },
            {   // 图片打包
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    name: './images/[name].[ext]',
                    limit: 8192
                }
            }
        ]
    },
    plugins: [   // 打包需要的各种插件
        new htmlWebpackPlugin({   // 打包HTML
            template: './src/index.html'   //  HTML模板路径
        })
    ],
    watch: true   // 监听文件改动并自动打包
};