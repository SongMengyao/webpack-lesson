// import './index1.scss'

// var btn = document.createElement('button')
// document.body.appendChild(btn)

// btn.innerHTML = 'click to add'
// btn.onclick = function () {
//   var div = document.createElement('div')
//   div.innerHTML = 'songmengyao'
//   document.body.appendChild(div)
// }

import counter from './counter'
import number from './number'

counter()
number()

if (module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'))
    number()
  }) 
}
