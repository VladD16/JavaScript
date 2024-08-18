'use strict'

//  Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити
// величину сплаченого податку у грн.

if (confirm('Почати тестування?')) {
  function getArray(elementsQuantity) {
    const arr = []

    for (let i = 0; i < elementsQuantity; i++) {
      let userChoice = parseFloat(prompt(`Введіть ціну ${i + 1}:`))
      arr.push(userChoice)
    }

    return arr
  }

  function getRes(arr) {
    const res = arr.map((element) => (element * 0.2).toFixed(2))

    return res
  }

  const userChoice = parseInt(prompt(`Введіть кількість цін:`))
  const userArray = getArray(userChoice)
  const res = getRes(userArray)

  document.write(
    `<p>Оригінальний масив: ${userArray}<br> Модицікований масив: ${res}</p>`
  )
}
