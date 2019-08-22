原始的面向对象编程:
- 优点：code 模块化
- 存在的问题：code 不容易维护，bug不容易定位

这些问题可以用 webpack 解决，这里就是解决原始面向对象编程存在的问题的

项目搭建步骤：
- 初始化项目: npm init -y
- 安装依赖: npm i webpack webpack-cli --save-dev

项目运行步骤：
- 用 webpack 翻译 index.js: npx webpack index.js
