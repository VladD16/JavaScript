'use strict'

const mondayNumber = 1
const tuesdayNumber = 2
const wednesdayNumber = 3
const thursdayNumber = 4
const fridayNumber = 5
const saturdayNumber = 6
const sundayNumber = 7

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
