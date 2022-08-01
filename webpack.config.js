const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})

// 使用Node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    // 代表webpack运行的模式，可选值有两个 development 和 production
    mode: 'development',
    // 入口
    entry: path.join(__dirname, './src/index.js'),
    // 出口
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js'
    },
    // 插件
    plugins: [htmlPlugin],
    // 服务器参数
    devServer: {
        // 首次打包成功后，自动打开浏览器
        open: true,
        // 指定端口
        port: 80
        // host为指定运行的主机地址
    },
    module: {
        rules: [
            //定义了不同模块对应的 loader
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            //处理less文件的loader
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            //处理图片文件的loader，如果需要需要调用的loader只有一个，则可以传一个字符串
            {test: /\.jpg|png|gif$/, use: 'url-loader'}
        ]
    }
}