'use strict'

// Задача 4. Розробити клас Baner

// Поля(властивості):
// Масив об’єктів ( графічних зображень та посилань на сайти)
// ===============================================
// Методи (дії):
// Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера
//====================================================

if (confirm('Почати тестування?')) {
  class Baner {
    constructor(baners) {
      this.banersList = baners
    }

    getRandomObject() {
      return this.banersList[Math.floor(Math.random() * this.banersList.length)]
    }

    showBaner() {
      const randomBaner = this.getRandomObject()
      document.write(
        `<a target="_blank" href=${randomBaner.link}> <img src=${randomBaner.image}> </a>`
      )
    }
  }

  const banersList = [
    {
      image: 'img/google.webp',
      link: 'https://www.google.com',
    },
    {
      image: 'img/youtube.webp',
      link: 'https://www.youtube.com',
    },
    {
      image: 'img/rozetka.jpg',
      link: 'https://www.rozetka.com.ua',
    },
  ]

  const baners = new Baner(banersList)
  baners.showBaner()
}
