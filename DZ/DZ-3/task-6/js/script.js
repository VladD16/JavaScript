'use strict'

let monday = 1
let tuesday = 2
let wednesday = 3
let thursday = 4
let friday = 5
let saturday = 6
let sunday = 7

let userChoice = parseInt(prompt(`Введіть номер дня тижня (від 1 до 7)`, `1`))

if (userChoice === 1) {
  document.write(`<p>Це понеділок!</p>`)
} else if (userChoice === 2) {
  document.write(`<p>Це вівторок!</p>`)
} else if (userChoice === 3) {
  document.write(`<p>Це середа!</p>`)
} else if (userChoice === 4) {
  document.write(`<p>Це четвер!</p>`)
} else if (userChoice === 5) {
  document.write(`<p>Це п'ятниця!</p>`)
} else if (userChoice === 6) {
  document.write(`<p>Це субота!</p>`)
} else if (userChoice === 7) {
  document.write(`<p>Це неділя!</p>`)
} else {
  document.write(`<p>Введене значення некоректне!</p>`)
}
