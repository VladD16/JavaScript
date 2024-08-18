'use strict'

//  Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн.
// дати 30% знижки.

if (confirm('Почати тестування?')) {
  function getArray(elementsQuantity) {
    const arr = []

    for (let i = 0; i < elementsQuantity; i++) {
      let userChoice = parseFloat(prompt(`Введіть ціну ${i + 1} товару:`))
      arr.push(userChoice)
    }

    return arr
  }

  function getRes(arr) {
    const res = arr.map((element) =>
      element > 1000 ? (element * 0.7).toFixed(2) : element
    )

    return res
  }

  const userChoice = parseInt(prompt(`Введіть кількість товарів:`))
  const userArray = getArray(userChoice)
  const res = getRes(userArray)

  document.write(
    `<p>Оригінальний масив: ${userArray}<br> Модицікований масив: ${res}</p>`
  )
}
