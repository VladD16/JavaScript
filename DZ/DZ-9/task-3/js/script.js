'use strict'

// Користувач вводить кількість елементів. Створити масив, у якому перші 5
// елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

if (confirm('Почати тестування?')) {
  function getArray(elementsQuantity) {
    const arr = new Array(elementsQuantity)
    arr.fill(1, 0, 5).fill(7, 5)

    return arr
  }

  const userChoice = parseInt(prompt(`Введіть кількість елементів в масиві:`))
  const userArray = getArray(userChoice)

  document.write(`<p>${userArray}</p>`)
}
