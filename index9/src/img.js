import img_1 from '../imgs/1.jpg'

function getImg_1 () {
  var img = new Image()
  img.src = img_1
  img.classList.add('img_1')

  var root = document.getElementById('root')
  root.append(img)
}

export default getImg_1
