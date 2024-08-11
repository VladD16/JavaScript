'use strict'

// Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

function getSum(a, b, c, d) {
  return a + b + c + d
}

function getMult(a, b, c, d) {
  return a * b * c * d
}

function getAverage(a, b, c, d) {
  return (a + b + c + d) / 4
}

function getMin(a, b, c, d) {
  return Math.min(a, b, c, d)
}

let a = parseFloat(prompt(`Введіть перше число:`))
let b = parseFloat(prompt(`Введіть друге число:`))
let c = parseFloat(prompt(`Введіть третє число:`))
let d = parseFloat(prompt(`Введіть четверте число:`))

let sum = getSum(a, b, c, d)
let mult = getMult(a, b, c, d)
let average = getAverage(a, b, c, d)
let min = getMin(a, b, c, d)

document.write(`<p>Сума чисел: ${sum}</p>`)
document.write(`<p>Добуток чисел: ${mult}</p>`)
document.write(`<p>Середнє арифметичне: ${average}</p>`)
document.write(`<p>Мінімальне значення: ${min}</p>`)
