'use strict'

// Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата
// представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення
// дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за
// допомогою методу  toString.

//====================================================

if (confirm('Почати тестування?')) {
  class TDate {
    #day
    #month
    #year

    constructor(initDay, initMonth, initYear) {
      this.Day = initDay
      this.Month = initMonth
      this.Year = initYear
    }

    get Day() {
      return this.#day
    }
    set Day(newDay) {
      if (newDay < 1 || newDay > 30) {
        throw new Error('Введене значення дня не є коректним!')
      } else this.#day = newDay
    }

    get Month() {
      return this.#month
    }
    set Month(newMonth) {
      if (newMonth < 1 || newMonth > 12) {
        throw new Error('Введене значення місяця не є коректним!')
      } else this.#month = newMonth
    }

    get Year() {
      return this.#year
    }
    set Year(newYear) {
      if (newYear <= 0) {
        throw new Error('Введене значення року не є коректним!')
      } else this.#year = newYear
    }

    // ----------------------------

    increaseDay(days = 1) {
      const totalDay = this.#day + days
      if (totalDay > 30) {
        this.#month++
        this.#day = totalDay % 30
      } else this.#day = totalDay
    }
    decreaseDay(days = 1) {
      const totalDay = this.#day - days
      if (totalDay < 1) {
        this.#month--
        this.#day = 30 + totalDay
      } else this.#day = totalDay
    }

    increaseMonth(months = 1) {
      const totalMonth = this.#month + months
      if (totalMonth > 12) {
        this.#year++
        this.#month = totalMonth % 12
      } else this.#month = totalMonth
    }
    decreaseMonth(months = 1) {
      const totalMonth = this.#month - months
      if (totalMonth < 1) {
        this.#year--
        this.#month = 12 + totalMonth
      } else this.#month = totalMonth
    }

    increaseYear(years = 1) {
      this.#year += years
    }
    decreaseYear(years = 1) {
      this.#year -= years
    }

    toString() {
      return `${this.Day}. ${this.Month}. ${this.Year}`
    }
  }

  try {
    const date = new TDate(12, 7, 2010)
    document.write(`<p>${date}</p>`)
    // date.increaseMonth(6)
    // date.decreaseMonth(8)
    // date.increaseDay(19)
    // date.decreaseDay(12)
    document.write(`<p>${date}</p>`)
  } catch (error) {
    console.log(error.message)
  }
}
