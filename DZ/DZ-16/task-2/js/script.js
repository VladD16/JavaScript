'use strict'

// Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна
// зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення
// грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при
// якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

//====================================================

if (confirm('Почати тестування?')) {
  class TMoney {
    #sumInDollars
    #exchangeRate

    constructor(sumInDollars, exchangeRate) {
      this.SumInDollars = sumInDollars
      this.ExchangeRate = exchangeRate
    }

    get SumInDollars() {
      return this.#sumInDollars
    }
    set SumInDollars(newSum) {
      if (newSum <= 0) {
        throw new Error(`Введене значення суму не є коректним!`)
      } else this.#sumInDollars = newSum
    }

    get ExchangeRate() {
      return this.#exchangeRate
    }
    set ExchangeRate(newRate) {
      if (newRate <= 0) {
        throw new Error('Введене значення курсу не є коректним!')
      } else this.#exchangeRate = newRate
    }

    // ---------------------------------

    addSumInUAH(sum) {
      if (sum <= 0) {
        throw new Error(`Введено некоректне значення!`)
      } else this.#sumInDollars = this.#sumInDollars + sum / this.#exchangeRate
    }

    takeSumInUAH(sum) {
      if (sum <= 0 || sum > this.#sumInDollars * this.#exchangeRate) {
        throw new Error(
          `Введено некоректне значення або більше ніж є в наявності!`
        )
      } else this.#sumInDollars = this.#sumInDollars - sum / this.#exchangeRate
    }

    getExchangeRateToIncreaseSumBy100(sumInUAH) {
      return sumInUAH / 100
    }

    toString() {
      return `Сума: ${this.#sumInDollars} usd, курс обміну ${
        this.#exchangeRate
      }`
    }
  }

  try {
    const bank = new TMoney(1200, 40)
    document.write(`<p>${bank}</p>`)
    document.write(`<p>${bank.getExchangeRateToIncreaseSumBy100(5720)}</p>`)
    bank.addSumInUAH(6000)
    document.write(`<p>${bank}</p>`)
    bank.takeSumInUAH(55500)
    document.write(`<p>${bank}</p>`)
  } catch (error) {
    console.log(error.message)
  }

  console.log(`Скрипт продовжив роботу обробивши помилку`)
}
