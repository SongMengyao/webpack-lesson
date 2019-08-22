function Content () {
  var dom = document.getElementById('root')
  var content = document.createElement('div')
  content.innerText = 'root content'
  dom.append(content)
}

export default Content
