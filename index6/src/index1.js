// 这个文件的 code 浏览器无法执行，webpack 把这个文件的 code 翻译成浏览器可读的 code
// ES module 导入文件的写法，import 是异步导入的
// webpack 是一个模块打包工具，只能翻译 js 的 import, export 
import Header from './header'
import SideBar from './sidebar'
import Content from './content'

new Header()
new SideBar()
new Content()
