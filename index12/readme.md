# entry & output 基础配置

  - 多页面打包 入口配置
  - 多页面打包 出口配置
  - 出口配置的一些常用配置，例如：publicPath

# devtool - source-map

  - source-map 是一种映射关系，可以具体定位到 bug 所在
  - source-map 一般只用在 开发 环境，因为 source-map 会降低打包速度
  - source-map 关闭：source-map: 'none'
  - source-map 可以随意和 cheap, eval, inline 等搭配使用
