'use strict'

let sec = parseInt(prompt('Введіть кількість секунд:', '0'))

let hours = Math.floor(sec / 3600)
let min = Math.floor((sec % 3600) / 60)

document.write(
  `<p>${sec} секунд - це ${hours} годин(и/а) та ${min} хвилин(и)</p>`
)
