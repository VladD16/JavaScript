'use strict'

//  Дано масив імен. Сформувати масив з перших літер цих імен.

if (confirm('Почати тестування?')) {
  function getArray(elementsQuantity) {
    const arr = []

    for (let i = 0; i < elementsQuantity; i++) {
      let userChoice = prompt(`Введіть ім'я: ${i + 1}:`)
      arr.push(userChoice)
    }

    return arr
  }

  function getRes(arr) {
    let res = arr.map((element) => element.charAt(0))

    return res
  }

  const userChoice = parseInt(prompt(`Введіть кількість імен:`))
  const userArray = getArray(userChoice)
  const res = getRes(userArray)

  document.write(
    `<p>Оригінальний масив: ${userArray}<br> Модицікований масив: ${res}</p>`
  )
}
