'use strict'

// Задача 2. Створити об’єкт «Авто».

// === Авто ===
// Поля(властивості):
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// ===============================================
// Методи (дії):
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів
//====================================================

if (confirm('Почати тестування?')) {
  const car = {
    brand: 'Mercedez',
    tankSize: 60,
    numberOfAvailableLiters: 25,
    numberOfSeats: 5,
    numberOfPassengers: 3,

    carRefueling: function (liters) {
      const availableForRefueling = this.tankSize - this.numberOfAvailableLiters
      if (liters > availableForRefueling) alert('Стільки не влізе!')
      else {
        this.numberOfAvailableLiters += liters
        alert('Заправили!')
      }
    },

    getPassengersNumber: function () {
      alert(`Кількість пасажирів: ${this.numberOfPassengers}`)
    },

    increasePassengersNumber: function (passengers) {
      const freeSeats = this.numberOfSeats - this.numberOfPassengers
      if (passengers > freeSeats) alert('Стільки не влізе!')
      else {
        this.numberOfPassengers += passengers
        alert('Додали!')
      }
    },

    decreasePassengersNumber: function (passengers) {
      if (this.numberOfPassengers === 0) alert('Авто порожнє!')
      else {
        if (passengers > this.numberOfPassengers)
          alert('В авто немає стільки пасажирів!')
        else {
          alert('Пасажирів висадили!')
          this.numberOfPassengers -= passengers
        }
      }
    },
  }

  //   car.carRefueling(25)
  //   car.increasePassengersNumber(1)
  //   car.decreasePassengersNumber(2)
  //   car.getPassengersNumber()
}
