'use strict'

// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька
// результатів: кількість парних, кількість додатних, кількість більших за 100.

function getNumberAnalysis(a = 0, b = 0, c = 0) {
  let evenNumbers = 0
  if (a % 2 === 0) evenNumbers += 1
  if (b % 2 === 0) evenNumbers += 1
  if (c % 2 === 0) evenNumbers += 1

  let positiveNumbers = 0
  if (a > 0) positiveNumbers += 1
  if (b > 0) positiveNumbers += 1
  if (c > 0) positiveNumbers += 1

  let overHundredNumbers = 0
  if (a > 100) overHundredNumbers += 1
  if (b > 100) overHundredNumbers += 1
  if (c > 100) overHundredNumbers += 1

  return {
    evenNumbers,
    positiveNumbers,
    overHundredNumbers,
  }
}

let a = parseFloat(prompt(`Введіть перше число:`, `1`))
let b = parseFloat(prompt(`Введіть друге число:`, `1`))
let c = parseFloat(prompt(`Введіть третє число:`, `1`))

let result = getNumberAnalysis(a, b, c)
document.write(`<p>Числа: ${a}, ${b}, ${c}<br>
    Кількість парних числе: ${result.evenNumbers}<br>
    Кількість додатних чисел: ${result.positiveNumbers}<br>
    Кількість чисел більших за 100: ${result.overHundredNumbers}</p>`)
