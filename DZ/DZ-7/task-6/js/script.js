'use strict'

// Створити функцію, яка створює таблицю з вказаною кількістю рядків і
// стовпців (таблиця заповнюється заданим фіксованим повідомленням).

function getTable(rowNumber, colNumber, message) {
  document.write(`<table>`)
  for (let row = 1; row <= rowNumber; row++) {
    document.write(`<tr>`)
    for (let col = 1; col <= colNumber; col++) {
      document.write(`<td>${message}</td>`)
    }
    document.write(`</tr>`)
  }
  document.write(`</table>`)
}

let rowNumber = parseInt(prompt(`Введіть кількість рядків:`, `2`))
let colNumber = parseInt(prompt(`Введіть кількість стовпців:`, `2`))
let message = prompt(`Введіть повідомлення:`, `Hi`)

getTable(rowNumber, colNumber, message)
