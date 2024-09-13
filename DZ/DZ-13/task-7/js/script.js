'use strict'

// Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання
// двох цифр і робиться перевірка.

if (confirm('Почати тестування?')) {
  function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getTask() {
    let firstRandomNumber = getRandomNumber(1, 10)
    let secondRandomNumber = getRandomNumber(1, 10)
    let userChoice = parseInt(
      prompt(`Введіть результат: ${firstRandomNumber} + ${secondRandomNumber}`)
    )
    let res = firstRandomNumber + secondRandomNumber
    if (userChoice === res) alert(`Відповідь правильна!`)
    else alert(`Не правильно! Правильна відповідь: ${res}`)
  }

  setInterval(() => getTask(), 10000)
}
