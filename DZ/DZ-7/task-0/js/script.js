'use strict'

// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься
// цей місяць.

function getTimeOfYear(monthNumber) {
  let timeOfYear
  if (monthNumber > 0 && monthNumber <= 12) {
    if (monthNumber <= 2 || monthNumber === 12) {
      timeOfYear = 'Winter'
    } else if (monthNumber <= 5) {
      timeOfYear = 'Spring'
    } else if (monthNumber <= 8) {
      timeOfYear = 'Summer'
    } else if (monthNumber <= 11) {
      timeOfYear = 'Autumn'
    }
  } else timeOfYear = 'некоректне значення!'

  return timeOfYear
}

let userChoice = getTimeOfYear(parseInt(prompt(`Введіть номер місяця:`)))

document.write(`<p>Це ${userChoice}</p>`)
