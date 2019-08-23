# 优化 index5 项目

- 项目搭建过程
  - 初始化：npm init -y
  - 安装 webpack, webpack-cli: npm i webpack webpack-cli --save-dev

- 项目打包命令
  - 没有配置 webpack 之前，使用默认配置时，打包命令：npx webpack 入口文件名字
  - 配置 webpack 之后，打包命令：npx webpack

- 配置 webpack
  - webpack.config.js
  - webpack 配置文件的名字，默认的必须叫 webpack.config.js
  - 如果想使用自定义的 webpack 配置文件，可以使用如下打包命令：npx webpack --config 自定义的配置文件名字

- 配置 package.json 的 npm scripts
  - 配置 webpack 打包命令："bundle": "webpack"

    这时，在终端执行 npm run bundle 就相当于 npx webpack，运行的是当前项目中依赖包里存在的 webpack，也就是局部的 webpack

- webpack-cli 依赖的作用
  - 使 webpack 的命令可以在终端执行，比如: 
  ```
    webpack index.js
    npx webpack index.js
  ```
