'use strict'

// Створити функцію, яка випадковим чином виводить на екран одне із
// 4 зображень (шляхи до зображень передаються у функцію)

function getImage(src1, src2, src3, src4) {
  let image1 = src1
  let image2 = src2
  let image3 = src3
  let image4 = src4
  let randomImage = 1 + Math.floor(Math.random() * 4)
  switch (randomImage) {
    case 1:
      document.write(`<img src="${image1}" alt="image">`)
      break
    case 2:
      document.write(`<img src="${image2}" alt="image">`)
      break
    case 3:
      document.write(`<img src="${image3}" alt="image">`)
      break
    case 4:
      document.write(`<img src="${image4}" alt="image">`)
      break
  }
}

getImage(`img/img-1.jpg`, `img/img-2.jpg`, `img/img-3.jpg`, `img/img-4.jpg`)
