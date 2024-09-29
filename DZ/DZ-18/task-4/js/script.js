'use strict'

// Задача 4. Наперед задано у скрипті масив зі списком бажань. Після завантаження
// сторінки випадковим чином вибираються 3 і відображаються у окремих div
// (їх треба створити і додати на сторінку)

//====================================================

const wishesList = [
  'Happiness',
  'Success',
  'Joy',
  'Love',
  'Health',
  'Prosperity',
  'Peace',
  'Luck',
  'Bliss',
  'Fortune',
]

function getRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function showRandomWishes(arr) {
  const randomWishes = []
  for (let i = 0; i <= 2; i++) {
    const randomNum = getRandomNumber(0, arr.length - 1)
    if (!randomWishes.includes(arr[randomNum]))
      randomWishes.push(arr[randomNum])
    else i--
  }

  for (let i = 0; i < randomWishes.length; i++) {
    const el = document.createElement('div')
    el.innerText = randomWishes[i]
    document.body.append(el)
  }
}

window.onload = function () {
  showRandomWishes(wishesList)
}
