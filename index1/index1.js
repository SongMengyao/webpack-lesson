// 面向过程编程-老式js写法

var dom = document.getElementById('root')
// dom.append('<div>root head</div>')

var header = document.createElement('div')
header.innerText = 'root header'
dom.append(header)

var sideBar = document.createElement('div')
sideBar.innerText = 'root sideBar'
dom.append(sideBar)

var content = document.createElement('div')
content.innerText = 'root content'
dom.append(content)
