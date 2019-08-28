const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// module.exports is ES module 的语法
module.exports = {
  mode: 'production', // mode 打包模式(环境)，默认是 production。当 mode 值是 production 时，打出来的 bundle.js 文件 code 是被压缩过的。当 mode 值是 development 时，打出来的 bundle.js 文件 code 是没有压缩过的 
  // entry: './src/index1.js', // 打包入口文件，这两种写法是一样的
  entry: {
    main: './src/index1.js'
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        // 占位符
        options: {
          // 使得打包之后的图片名字和源文件图片名字一样
          name: '[name].[ext]',
          // 把图片打包到 dist 文件夹下的 imgs 文件夹下面
          outputPath: 'imgs/',
          // limit 是 url-loader 才有的配置项。限制图片的大小，当图片大小大于 2048 的时候，打包到 dist/imgs 下。小于 2048 时，直接打包到 bundle.js 里面。单位：字节byte, 1kb=1024b
          limit: 204800
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']  // postcss-loader 是使样式的厂商前缀可以正常使用，比如 -webkit-
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: ['file-loader']  // file-loader 处理 字体 文件
    }]
  },
  plugins: [
    // HtmlWebpackPlugin 会在打包结束后自动生成一个 html 文件，并把打包生成的 js 自动引入到这个 html 文件中
    new HtmlWebpackPlugin({
      template: 'src/index1.html' // 打包生成的 html 文件，以 src/index1.html 为模版生成的
    }),
    // CleanWebpackPlugin 会在打包之前运行，删掉上次打包生成的文件
    new CleanWebpackPlugin()
  ],
  output: { // 打包出的文件配置
    filename: 'bundle.js', // 打包出的文件的name
    path: path.resolve(__dirname, 'dist') // 这里的 __dirname 指的是 webpack.config.js 文件所在目录，dist 是打包出的文件夹的name。这一行 code 指的是打包出的文件夹和 webpack.config.js 文件在同一目录下，并且名字叫 bundle
  }
}
