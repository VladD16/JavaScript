'use strict'

// Дано масив елементів. Вивести на екран елементи, що більші за 100

if (confirm('Почати тестування?')) {
  function getArray(elementsQuantity) {
    const arr = []

    for (let i = 0; i < elementsQuantity; i++) {
      let userChoice = parseInt(prompt(`Введіть ${i + 1} елемент масиву:`))
      arr.push(userChoice)
    }

    return arr
  }

  function getOverHundredElements(arr) {
    const overHundredElements = []
    for (const element of arr) {
      if (element > 100) overHundredElements.push(element)
    }

    return overHundredElements
  }

  const userChoice = parseInt(prompt(`Введіть кількість елементів в масиві:`))
  const userArray = getArray(userChoice)
  const overHundredElements = getOverHundredElements(userArray)

  document.write(`<p>${overHundredElements}</p>`)
}
