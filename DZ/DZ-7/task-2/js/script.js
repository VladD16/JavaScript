'use strict'

// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

function getDayInfo(dayNumber) {
  let dayInfo
  if (dayNumber > 0 && dayNumber <= 7) {
    if (dayNumber <= 5) {
      dayInfo = `робочий день!`
    } else {
      dayInfo = `вихідний!`
    }
  } else {
    dayInfo = `некоректне значення!`
  }

  return dayInfo
}

let userChoice = getDayInfo(parseInt(prompt(`Введіть номер дня:`)))

document.write(`<p>Це ${userChoice}</p>`)
