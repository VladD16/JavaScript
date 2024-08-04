'use strict'

let userMinNumber = parseInt(prompt(`Введіть початкове число інтервалу:`))
let userMaxNumber = parseInt(prompt(`Введіть кінцеве число інтервалу:`))

let sumOddNumbers = 0
let quantityOddNumbers = 0

for (let i = userMinNumber; i <= userMaxNumber; i++) {
  if (i % 2 === 1) {
    sumOddNumbers += i
    quantityOddNumbers++
    if (quantityOddNumbers === 5) break
  }
}

document.write(
  `<p>Сума перших 5 непарних чисел всередені інтервалу(від ${userMinNumber} до ${userMaxNumber}) - ${sumOddNumbers}</p>`
)
