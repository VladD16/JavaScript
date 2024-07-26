'use strict'

let randomMonthNum = 1 + Math.floor(Math.random() * 12)
let randomDayNum = Math.floor(Math.random() * 7)

let sum = randomMonthNum + randomDayNum

document.write(`<p>Сума випадкових чисел: ${sum}</p>`)
