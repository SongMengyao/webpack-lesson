# webpackDevServer

  script 配置如下：
  ```
    "scripts": {
      "bundle": "webpack",
      "watch": "webpack --watch",
      "start": "webpack-dev-server"
    },
  ```
- watch: 
  - 能自动监听所有源代码，只要源代码发生变化，就会自动打包

- webpackDevServer: 
  - 能自动监听所有源代码
  - 还能自动启一个 web 服务器
  - 当源代码发生变化之后，可以自动刷新浏览器
  - webpack 内置有 devServer 配置项
  - 不过运行 webpack-dev-server 命令的话，还得自己手动安装 webpack-dev-server 依赖

- 为什么需要启动一个 web 服务器？
  -  通过 file 直接访问的是静态文件，如果 code 中有 ajax 请求 (http 请求)的话，就执行不了。此时需要一个 web 服务器来帮忙执行 ajax 请求

- devserver 的工作原理
  - 在根目录下建立一个 server.js 文件，模仿 devserver 的工作原理
