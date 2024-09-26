'use strict'

// Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа,
// які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у
// заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту
// класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів
// Приклад.
// testsList= [
//    {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//    {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує
// якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування.
// Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було
// створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.

//====================================================

if (confirm('Почати тестування?')) {
  class MultChecker {
    static firsValue
    static seconValue
    static operation = '*'
    static correctAnswer

    static getRandomNumber(minValue = 1, maxValue = 10) {
      return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
    }

    static getExample() {
      MultChecker.firsValue = MultChecker.getRandomNumber()
      MultChecker.seconValue = MultChecker.getRandomNumber()
      MultChecker.correctAnswer = MultChecker.firsValue * MultChecker.seconValue
      return `${MultChecker.firsValue} * ${MultChecker.seconValue}`
    }
  }

  class AddChecker {
    static firsValue
    static seconValue
    static operation = '+'
    static correctAnswer

    static getRandomNumber(minValue = 1, maxValue = 10) {
      return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
    }

    static getExample() {
      AddChecker.firsValue = AddChecker.getRandomNumber()
      AddChecker.seconValue = AddChecker.getRandomNumber()
      AddChecker.correctAnswer = AddChecker.firsValue + AddChecker.seconValue
      return `${AddChecker.firsValue} + ${AddChecker.seconValue}`
    }
  }

  class Hystory {
    static hystory
    constructor() {
      if (Hystory.hystory) return Hystory.hystory
      this.testsList = []

      Hystory.hystory = this
    }

    static showRes() {
      console.log(Hystory.hystory.testsList)
      for (let i = 0; i < Hystory.hystory.testsList.length; i++) {
        document.write(Hystory.hystory.testsList[i] + '<br>')
      }
    }
  }

  class TestData {
    static getTestRes(
      firstNum,
      secondNum,
      operation,
      userAnswer,
      correctAnswer
    ) {
      return `firstNum: ${firstNum}, secondNum: ${secondNum}, operation: ${operation}, userAnswer: ${userAnswer}, correctAnswer: ${correctAnswer} `
    }
  }

  class TestManager {
    static getRandomExample() {
      if (Math.random() < 0.5) {
        return MultChecker.getExample()
      } else return AddChecker.getExample()
    }

    static startTest(interval, tasksCount) {
      let count = 0
      let timer = setInterval(() => {
        let randomExample = TestManager.getRandomExample()
        let userAnswer = parseInt(prompt(randomExample))

        if (randomExample.includes('+')) {
          Hystory.hystory.testsList.push(
            TestData.getTestRes(
              AddChecker.firsValue,
              AddChecker.seconValue,
              AddChecker.operation,
              userAnswer,
              AddChecker.correctAnswer
            )
          )
        } else {
          Hystory.hystory.testsList.push(
            TestData.getTestRes(
              MultChecker.firsValue,
              MultChecker.seconValue,
              MultChecker.operation,
              userAnswer,
              MultChecker.correctAnswer
            )
          )
        }

        count++
        if (count >= tasksCount) {
          clearInterval(timer)
          Hystory.showRes()
        }
      }, interval * 1000)
    }
  }

  const resList = new Hystory()
  TestManager.startTest(1, 3)
}
