// 这个文件的 code 浏览器无法执行，webpack 把这个文件的 code 翻译成浏览器可读的 code
// ES module 导入文件的写法，import 是异步导入的
// webpack 是一个模块打包工具，只能翻译 js 的 import, export 

import img_1 from '../imgs/1.jpg'

console.log('打包图片-img_1: ', img_1)

var img = new Image()  // 创建一个 <img /> 标签
img.src = img_1

var root = document.getElementById('root')
root.append(img)
