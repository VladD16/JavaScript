'use strict'

// Створити функцію, яка за номером місяця повертає його назву.

function getMonthTitle(monthNumber) {
  let monthTitle
  switch (monthNumber) {
    case 1:
      monthTitle = 'January'
      break
    case 2:
      monthTitle = 'February'
      break
    case 3:
      monthTitle = 'March'
      break
    case 4:
      monthTitle = 'April'
      break
    case 5:
      monthTitle = 'May'
      break
    case 6:
      monthTitle = 'June'
      break
    case 7:
      monthTitle = 'July'
      break
    case 8:
      monthTitle = 'August'
      break
    case 9:
      monthTitle = 'September'
      break
    case 10:
      monthTitle = 'October'
      break
    case 11:
      monthTitle = 'November'
      break
    case 12:
      monthTitle = 'December'
      break

    default:
      monthTitle = 'некоректне значення'
      break
  }

  return monthTitle
}

let userChoice = getMonthTitle(parseInt(prompt(`Введіть номер місяця:`)))

document.write(`<p>Це ${userChoice}</p>`)
