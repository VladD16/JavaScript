'use strict'

//  Дано масив елементів. Знайти добуток додатних елементів

if (confirm('Почати тестування?')) {
  function getArray(elementsQuantity) {
    const arr = []

    for (let i = 0; i < elementsQuantity; i++) {
      let userChoice = parseInt(prompt(`Введіть ${i + 1} елемент масиву:`))
      arr.push(userChoice)
    }

    return arr
  }

  function getSumPositiveNumbers(arr) {
    let sum = 0

    for (const element of arr) {
      if (element > 0) sum += element
    }

    return sum
  }

  const userChoice = parseInt(prompt(`Введіть кількість елементів в масиві:`))
  const userArray = getArray(userChoice)
  const sumPositiveNumbers = getSumPositiveNumbers(userArray)

  document.write(`<p>Sum = ${sumPositiveNumbers}</p>`)
}
