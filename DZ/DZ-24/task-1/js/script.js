'use strict'

// =============================================

// Задача 1. Використовуючи один з АРІ
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних
// Намагайтесь зробити це з використанням класів. Окремо клас для побудови розмітки. Окремо клас,
// який буде робити запити і повертати результати.

// =============================================

class ApiRequester {
  constructor(url) {
    this.url = url
  }

  getData() {
    return fetch(this.url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return data.message
      })
      .catch((err) => {
        console.log('Проблема запиту!')
      })
  }
}

class RenderImage {
  constructor(imgUrl) {
    this.imgUrl = imgUrl
  }

  render() {
    const imgContainer = document.querySelector('.images-container')
    const imgEl = document.createElement('img')
    const imgWrap = document.createElement('div')
    imgWrap.classList.add('image-wrap')
    imgEl.setAttribute('src', this.imgUrl)
    imgWrap.append(imgEl)
    imgContainer.append(imgWrap)
  }
}

// for (let i = 0; i < 12; i++) {
//   const api = new ApiRequester('https://dog.ceo/api/breeds/image/random')
//   api.getData().then((imgUrl) => {
//     const renderEl = new RenderImage(imgUrl)
//     renderEl.render()
//   })
// }

window.onload = async () => {
  const requests = []
  for (let i = 0; i < 12; i++) {
    const api = new ApiRequester('https://dog.ceo/api/breeds/image/random')
    requests.push(api.getData())
  }

  // Очікуємо завершення всіх запитів
  const images = await Promise.all(requests)
  images.forEach((imgUrl) => {
    if (imgUrl) {
      const renderEl = new RenderImage(imgUrl)
      renderEl.render()
    }
  })

  // Робимо сторінку видимою після завантаження всіх зображень
  document.body.classList.add('loaded')
}
