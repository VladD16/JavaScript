'use strict'

// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

if (confirm('Почати тестування?')) {
  function getArray(elementsQuantity) {
    const arr = []

    for (let i = 0; i < elementsQuantity; i++) {
      let userChoice = parseInt(prompt(`Введіть ${i + 1} елемент масиву:`))
      arr.push(userChoice)
    }

    return arr
  }

  function getRes(arr) {
    const firstElement = arr[0]
    const res = arr.map((element) =>
      element > firstElement ? element * 2 : element
    )

    return res
  }

  const userChoice = parseInt(prompt(`Введіть кількість елементів в масиві:`))
  const userArray = getArray(userChoice)
  const res = getRes(userArray)

  document.write(
    `<p>Оригінальний масив: ${userArray}<br> Модифікований масив: ${res}</p>`
  )
}
