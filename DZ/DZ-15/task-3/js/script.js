'use strict'

// Задача 3. Розробити клас MultChecker для перевірки таблиці множення

// Поля(властивості):
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// ===============================================
// Методи (дії):
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран
//====================================================

if (confirm('Почати тестування?')) {
  class MultChecker {
    constructor(number) {
      this.number = number
      this.correctAnswers = 0
      this.wrongAnswers = 0
    }

    getGeneratedExample() {
      this.randomNumber = 1 + Math.floor(Math.random() * 10)
      return `${this.number} помножити на ${this.randomNumber}`
    }

    correctAnswer() {
      return this.number * this.randomNumber
    }

    render() {
      document.write(`<p>
        Правильних відповідей: ${this.correctAnswers} <br>
        Неправильних відповідей: ${this.wrongAnswers}
        </p>`)
    }
  }

  const multChecker5 = new MultChecker(5)

  for (let i = 0; i < 5; i++) {
    let userAnswer = parseInt(prompt(`${multChecker5.getGeneratedExample()}`))
    userAnswer === multChecker5.correctAnswer()
      ? multChecker5.correctAnswers++
      : multChecker5.wrongAnswers++
  }

  multChecker5.render()
}
