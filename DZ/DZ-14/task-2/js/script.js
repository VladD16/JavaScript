'use strict'

// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити,
// який буде рік через N місяців.

if (confirm('Почати тестування?')) {
  const date = {
    day: 16,
    month: 5,
    year: 2024,
  }

  // Math.floor( value - min + Shift)%(max - min + 1) + min

  function getMonth({ month }, N) {
    return (Math.floor(month - 1 + N) % 12) + 1
  }

  const res = getMonth(date, 15)
  document.write(`<p>${res}</p>`)
}
