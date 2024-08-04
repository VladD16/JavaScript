'use strict'

const januaryNumber = 1
const februaryNumber = 2
const marchNumber = 3
const aprilNumber = 4
const mayNumber = 5
const juneNumber = 6
const julyNumber = 7
const augustyNumber = 8
const septemberNumber = 9
const octoberNumber = 10
const novemberNumber = 11
const decemberNumber = 12

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
