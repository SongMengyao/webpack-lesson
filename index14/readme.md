# hot module replacement (简称 HMR) 热更新模块

  - 当页面上 css 内容更新时，只更新 css，不刷新 html 和 js 的内容
  - 当某个 js 文件更新时，如果想只更新某个 js 文件，需要在引入该 js 文件的地方，使用 module.hot 来监听
  - vue 和 react 框架都内置有 HMR，所以可以自动刷新页面，原理就是 index1.js 里面的
  ```
    if (module.hot) {
      module.hot.accept('./number', () => {
        document.body.removeChild(document.getElementById('number'))
        number()
      }) 
    }
  ```
