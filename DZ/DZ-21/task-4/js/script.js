'use strict'

// Задача 4. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач
// зробив рух мишкою.

//====================================================

window.onload = () => {
  const start = new Date()
  document.addEventListener(
    'mousemove',
    () => {
      const end = new Date()
      const dif = (end - start) / 1000
      const res = document.createElement('p')
      res.innerText = `Пройшло ${dif} секунд перш ніж користувач зробив рух мишкою!`
      document.body.append(res)
    },
    { once: true }
  )
}
