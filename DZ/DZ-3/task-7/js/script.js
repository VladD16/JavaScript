'use strict'

let January = 1
let February = 2
let March = 3
let April = 4
let May = 5
let June = 6
let July = 7
let Augusty = 8
let September = 9
let October = 10
let November = 11
let December = 12

let userChoice = parseInt(prompt(`Введіть номер місяця (від 1 до 12)`, `1`))

if (userChoice === 1 || userChoice === 2 || userChoice === 12) {
  document.write(`<p>Це місяць зими!</p>`)
} else if (userChoice >= 3 && userChoice <= 5) {
  document.write(`<p>Це місяць весни!</p>`)
} else if (userChoice >= 6 && userChoice <= 8) {
  document.write(`<p>Це місяць літа!</p>`)
} else if (userChoice >= 9 && userChoice <= 11) {
  document.write(`<p>Це місяць осіні!</p>`)
} else {
  document.write(`<p>Значення введено некоректно!</p>`)
}
