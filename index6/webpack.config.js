const path = require('path')

// module.exports is ES module 的语法
module.exports = {
  entry: './src/index1.js', // 打包入口文件
  output: { // 打包出的文件配置
    filename: 'bundle.js', // 打包出的文件的name
    path: path.resolve(__dirname, 'dist') // 这里的 __dirname 指的是 webpack.config.js 文件所在目录，bundle 是打包出的文件夹的name。这一行 code 指的是打包出的文件夹和 webpack.config.js 文件在同一目录下，并且名字叫 bundle
  }
}
