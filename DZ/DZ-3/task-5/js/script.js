'use strict'

let categoryName = prompt(
  `Ввведіть назву категорії водія: (A, B, C)`
).toUpperCase()

if (categoryName === 'A') {
  document.write(`<p>Можна керувати мотоциклом!</p>`)
} else if (categoryName === 'B') {
  document.write(`<p>Можна керувати легковим автомобілем!</p>`)
} else if (categoryName === 'C') {
  document.write(`<p>Можна керувати вантажним автомобілем!</p>`)
} else {
  document.write(`<p>Некоректно введене значення!</p>`)
}
