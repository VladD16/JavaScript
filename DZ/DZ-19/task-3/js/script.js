'use strict'

// Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними
//  числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100).
//  При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір,
//  інші у червоний.

//====================================================

window.onload = () => {
  function getRandomNumber(min = 1, max = 10) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function generateList(elQuantity) {
    const olEl = document.createElement('ol')
    for (let i = 0; i < elQuantity; i++) {
      const liEl = document.createElement('li')
      liEl.innerText = getRandomNumber(1, 100)
      olEl.append(liEl)
    }
    return olEl
  }

  function addLists(listQuantity) {
    for (let i = 0; i < listQuantity; i++) {
      const list = generateList(getRandomNumber())
      const listsContainer = document.querySelector('.lists-container')
      listsContainer.append(list)
    }
  }

  addLists(5)

  function getRes() {
    const olLists = document.querySelectorAll('ol')
    for (const list of olLists) {
      if (list.childNodes.length % 2 === 0) {
        list.childNodes.forEach((el) => {
          el.style.backgroundColor = 'green'
        })
      } else {
        list.childNodes.forEach((el) => {
          el.style.backgroundColor = 'red'
        })
      }
    }
  }

  document.getElementById('res').onclick = getRes
}
