# loader 之 样式  css-loader  style-loader

- loader
  - webpack 不能识别非 js 结尾的文件，所以 loader 用于对模块的源代码进行转换，转换成 webpack 可以处理的文件。比如：图片处理转换成 data URL，TypeScript 转换成 JavaScript 等
  - loader 使用方法：
    - 首先，在 webpack.config.js 文件配置 module，如下：
    ```
      module: {
        rules: [
          // file-loader 处理图片、字体等
          {
            test: /\.jpg$/,
            use: {
              loader: 'file-loader'
            }
          },
          // style-loader  css-loader 处理css文件
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    ```
    - 其次，安装对应 loader 的依赖，比如：
    ```
      npm i file-loader -D
      (等同于 npm i file-loader --save-dev)
    ```
  - 常用的 loader 及其工作原理
    - file-loader:
      > 作用：转换 图片、字体 等静态文件
        
      > 底层工作原理：先把图片文件移动到指定的打包文件夹中，比如 dist，然后重命名图片(也可以自定义图片的名字)，最后把图片相对于 dist 文件夹的名字返回给调用该图片的地方
    - url-loader:
      > 和 file-loader 非常相似，就是独有 options.limit 配置
      ```
        options: {
          limit: 1024
        }
      ```
      > limit 单位是 字节
    - 样式 loader:
      > style-loader: 转换 css 文件

      > css-loader: 转换 css 文件

      > css-loader 作用：理清所有 css 文件的关系，然后整合所有的 css 文件成一段 css

      > style-loader 作用：在 css-loader 处理完 css 文件之后，将处理好的 css 挂载到页面的 head 部分

      > sass-loader: 转换 scss 文件，同时必须配合 css-loader, style-loader 使用

      > postcss-loader: 使样式中写的厂商前缀(eg: -webkit-)可以正常使用，配置文件在根目录下的 postcss.config.js

      > autoprefixer 插件：配合 postcss-loader 使用
    - xml-loader: 转换 xml 文件
    - vue-loader: 转换 vue 文件
  - loader 的加载顺序：`从下到上，从右至左`，比如：
  ```
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ```
  先执行 sass-loader, 在执行 css-loader, 最后执行 style-loader

