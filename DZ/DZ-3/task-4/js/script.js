'use strict'

let userAge = parseInt(prompt(`Введіть вік людини:`, `0`))

if (userAge < 7 && userAge > 0) {
  document.write(`<p>Це дитина!</p>`)
} else if (userAge >= 7 && userAge < 17) {
  document.write(`<p>Це школяр!</p>`)
} else if (userAge >= 17 && userAge < 24) {
  document.write(`<p>Це студент!</p>`)
} else if (userAge >= 24 && userAge < 60) {
  document.write(`<p>Це працівник!</p>`)
} else if (userAge >= 60) {
  document.write(`<p>Це пенсіонер!</p>`)
} else {
  document.write(`<p>Некоректно введене значення!</p>`)
}
