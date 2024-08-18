'use strict'

// Користувач вводить кількість елементів. Створити масив, що складається з
// вказаної кількості елементів заповнених нулями.

if (confirm('Почати тестування?')) {
  function getArray(elementsQuantity) {
    const arr = new Array(elementsQuantity).fill(0)

    return arr
  }

  const userChoice = parseInt(prompt(`Введіть кількість елементів в масиві:`))
  const userArray = getArray(userChoice)

  document.write(`<p>${userArray}</p>`)
}
