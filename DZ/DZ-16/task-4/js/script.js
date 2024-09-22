'use strict'

// Задача 4. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити
// поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати
// методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття
// деякої суми.

//====================================================

if (confirm('Почати тестування?')) {
  class TBankomat {
    constructor() {
      this.banknotes = []
    }

    getTotalSum() {
      return this.banknotes.reduce(
        (prevSum, banknote) => prevSum + banknote.Value * banknote.Quantity,
        0
      )
    }

    getMinBanknote() {
      let minValue = 0
      for (const banknote of this.banknotes) {
        if (banknote.Quantity > 0) {
          minValue = banknote.Value
          break
        }
      }
      return minValue
    }

    // takeMoney(userSum) {
    //   if (userSum < this.getMinBanknote() || userSum > this.getTotalSum())
    //     return `Вибачте такої суми немає!`

    //   this.banknotes.sort((el1, el2) => el2.Value - el1.Value)

    //   let acc = 0
    //   this.banknotes.forEach((el, index) => {
    //     while (
    //       userSum !== acc ||
    //       el.Value >= userSum - acc ||
    //       el.Quantity === 0
    //     ) {
    //       acc += el.Value
    //       this.banknotes[index].Quantity--
    //     }
    //   })

    //   return `Знято ${acc}`
    // }

    toString() {
      return `5: ${this.banknotes[0].Quantity} <br>
      10: ${this.banknotes[1].Quantity} <br>
      20: ${this.banknotes[2].Quantity} <br>
      50: ${this.banknotes[3].Quantity} <br>
      100: ${this.banknotes[4].Quantity} <br>
      200: ${this.banknotes[5].Quantity} <br>`
    }
  }

  // ---------------------------------------------------------------

  class Banknote {
    #value
    #quantity

    constructor(value, quantity) {
      this.Value = value
      this.Quantity = quantity
    }

    get Value() {
      return this.#value
    }
    set Value(newValue) {
      if (newValue <= 0 || !Number.isInteger(newValue)) {
        throw new Error('Введено некоректне значення!')
      } else this.#value = newValue
    }

    get Quantity() {
      return this.#quantity
    }
    set Quantity(newQuantity) {
      if (newQuantity < 0 || !Number.isInteger(newQuantity)) {
        throw new Error('Введено некоректне значення!')
      } else this.#quantity = newQuantity
    }
  }

  // ---------------------------------------------------------------

  try {
    const ATM = new TBankomat()
    const banknote5 = new Banknote(5, 33)
    const banknote10 = new Banknote(10, 47)
    const banknote20 = new Banknote(20, 35)
    const banknote50 = new Banknote(50, 102)
    const banknote100 = new Banknote(100, 77)
    const banknote200 = new Banknote(200, 92)
    ATM.banknotes.push(
      banknote5,
      banknote10,
      banknote20,
      banknote50,
      banknote100,
      banknote200
    )
    console.log(ATM)
    document.write(`<p>${ATM}</p>`)
    document.write(`<p>${ATM.getTotalSum()}</p>`)
    document.write(`<p>${ATM.getMinBanknote()}</p>`)
    // document.write(`<p>${ATM.takeMoney(200)}</p>`)
  } catch (error) {
    console.log(error.message)
  }
}
