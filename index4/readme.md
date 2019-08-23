- 项目构建步骤
  - 初始化：npm init -y
  - 安装 webpack, webpack-cli：

    局部安装(项目内安装)：npm i webpack webpack-cli --save-dev (等价于 npm i webpack webpack-cli -D)

    全局安装(不推荐使用)：npm i webpack webpack-cli -g
    
    全局卸载：npm uninstall webpack webpack-cli -g

- 运行 webpack 命令
  - npx webpack -v
  - npx 解释：npx 用来运行存在当前 node_modules 下的 webpack 依赖包
  - webpack -v: 这个命令，是运行全局的 webpack

- 查看 webpack 都有哪些版本
  - npm info webpack

- 安装特定版本的 webpack
  - npm install webpack@版本号 --save-dev

- 项目运行步骤
  - 安装依赖：npm i
