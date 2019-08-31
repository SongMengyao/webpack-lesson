# babel 处理 es6 语法
  - babel-loader: 连接 babel 和 webpack
  - @babel/core: babel 核心库
  - @babel/preset-env: 转换 es6 语法为 es5
  - @babel/polyfill: 把一些低版本浏览器不能识别处理的函数转换一下，让低版本浏览器可以处理。但是引入 @babel/polyfill 之后，打包文件会大很多。

# babel 用法，见官网：
  - https://babeljs.io/setup#installation
  - https://babeljs.io/docs/en/babel-polyfill
