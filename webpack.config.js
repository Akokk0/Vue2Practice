const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})

const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// 使用Node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    // 在开发调试阶段，建议把devtool的值设置为 eval-source-map
    // devtool: 'eval-source-map',
    // 在实际发布的时候，建议大家把devtool的值设置为 nosources-source-map 或直接关闭 SourceMap
    devtool: 'nosources-source-map',
    // 代表webpack运行的模式，可选值有两个 development 和 production
    mode: 'development',
    // 入口
    entry: path.join(__dirname, './src/index.js'),
    // 出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js'
    },
    // 插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
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
            //在配置url-loader的时候，多个参数之间，使用&符号进行分割
            {test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images'},
            //使用babel-loader处理高级的JS语法
            //在配置babel-loader的时候，程序员只需要把自己的代码进行转换即可，一定要排除node_modules目录下的JS文件
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
}