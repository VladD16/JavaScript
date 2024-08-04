'use strict'

let userAge = parseInt(prompt(`Введіть вік людини:`, `0`))

if (userAge < 1) {
  document.write(`<p>Введено некоректне значення!</p>`)
} else if (userAge < 7) {
  document.write(`<p>Це дитина!</p>`)
} else if (userAge < 17) {
  document.write(`<p>Це школяр!</p>`)
} else if (userAge < 24) {
  document.write(`<p>Це студент!</p>`)
} else if (userAge < 60) {
  document.write(`<p>Це працівник!</p>`)
} else {
  document.write(`<p>Це пенсіонер!</p>`)
}
