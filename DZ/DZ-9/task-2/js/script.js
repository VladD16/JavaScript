'use strict'

// Користувач вводить кількість елементів. Створити масив, у якому перша половина
// заповнена 1-цями, а друга заповнена 7-ками.

if (confirm('Почати тестування?')) {
  function getArray(elementsQuantity) {
    const arr = new Array(elementsQuantity)
    const averageElement = arr.length / 2
    arr.fill(1, 0, averageElement)
    arr.fill(7, averageElement)

    return arr
  }

  const userChoice = parseInt(prompt(`Введіть кількість елементів в масиві:`))
  const userArray = getArray(userChoice)

  document.write(`<p>${userArray}</p>`)
}
