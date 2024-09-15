'use strict'

// Задача 5. Розробити клас «Керівник танців»

// Поля(властивості):
// Масив імен хлопців
// Масив імен дівчат
// ===============================================
// Методи (дії):
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців
//====================================================

if (confirm('Почати тестування?')) {
  class Director {
    constructor(boys, girls) {
      this.boys = boys
      this.girls = girls
    }

    getRandomBoy() {
      return this.boys[Math.floor(Math.random() * this.boys.length)]
    }

    getRandomGirl() {
      return this.girls[Math.floor(Math.random() * this.girls.length)]
    }

    getRandomPair() {
      alert(`${this.getRandomBoy()} and ${this.getRandomGirl()}`)
    }

    run() {
      setInterval(() => this.getRandomPair(), 5000)
    }
  }

  const boysList = ['Vlad', 'Max', 'John', 'Zhenya', 'Alex']
  const girlsList = ['Olga', 'Nastya', 'Sophia', 'Mia', 'Emma']

  const dansDirector = new Director(boysList, girlsList)

  // alert(dansDirector.getRandomBoy())
  // alert(dansDirector.getRandomGirl())
  // dansDirector.getRandomPair()
  // dansDirector.run()
}
