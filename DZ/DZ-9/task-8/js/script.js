'use strict'

//  Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

if (confirm('Почати тестування?')) {
  function getArray(elementsQuantity) {
    const arr = []

    for (let i = 0; i < elementsQuantity; i++) {
      let userChoice = prompt(`Введіть номер ${i + 1}:`)
      arr.push(userChoice)
    }

    return arr
  }

  function getRes(arr) {
    const res = []

    arr.forEach((element) => {
      if (element.charAt(0).toLowerCase() === 'a') res.push(element)
    })

    return res
  }

  const userChoice = parseInt(prompt(`Введіть кількість номерів:`))
  const userArray = getArray(userChoice)
  const res = getRes(userArray)

  document.write(
    `<p>Оригінальний масив: ${userArray}<br> Модицікований масив: ${res}</p>`
  )
}
