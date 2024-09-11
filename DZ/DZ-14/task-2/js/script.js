'use strict'

// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити,
// який буде рік через N місяців.

if (confirm('Почати тестування?')) {
  const date = {
    day: 16,
    month: 5,
    year: 2024,
  }

  function getYear({ month, year }, userMonth) {
    return Math.floor((month + userMonth - 1) / 12) + year
  }

  const res = getYear(date, 15)
  document.write(`<p>${res}</p>`)
}
