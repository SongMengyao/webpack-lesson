const path = require('path')

// module.exports is ES module 的语法
module.exports = {
  mode: 'production', // mode 打包模式(环境)，默认是 production。当 mode 值是 production 时，打出来的 bundle.js 文件 code 是被压缩过的。当 mode 值是 development 时，打出来的 bundle.js 文件 code 是没有压缩过的 
  // entry: './src/index1.js', // 打包入口文件，这两种写法是一样的
  entry: {
    main: './src/index1.js'
  },
  output: { // 打包出的文件配置
    filename: 'bundle.js', // 打包出的文件的name
    path: path.resolve(__dirname, 'dist') // 这里的 __dirname 指的是 webpack.config.js 文件所在目录，dist 是打包出的文件夹的name。这一行 code 指的是打包出的文件夹和 webpack.config.js 文件在同一目录下，并且名字叫 bundle
  }
}
