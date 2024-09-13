'use strict'

// Задача 5.  З використанням замикань розробити ітератор, тобто функцію, що буде поступово
// за окремими викликами видавати по одне значення від заданого мінімального до заданого
// максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення.
// З використанням цієї функції реалізувати перебір номерів місяців.

if (confirm('Почати тестування?')) {
  function createCircularIterator(min, max) {
    let current = min
    function getchangedValue() {
      let value = current
      current = current === max ? min : current + 1
      return value
    }

    return getchangedValue
  }

  const monthIterator = createCircularIterator(1, 12)
  const userChoice = parseInt(prompt(`Скільки разів викликати функцію?`, `20`))

  for (let i = 0; i < userChoice; i++) {
    console.log(monthIterator())
  }
}
