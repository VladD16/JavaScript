'use strict'

// Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість,
// фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів,
// фільтрація за назвою товару, фільтрація за назвою фірми

//====================================================

if (confirm('Почати тестування?')) {
  // -------------------------
  class Product {
    #quantity
    get Quantity() {
      return this.#quantity
    }
    set Quantity(newQuantity) {
      if (newQuantity < 0) {
        throw new Error('Кількість повинна бути не меньше 0!')
      } else this.#quantity = newQuantity
    }
    constructor(initTitle, initUnitOfMeasurement, initQuantity, initFirm) {
      this.title = initTitle
      this.unitOfMeasurement = initUnitOfMeasurement
      this.Quantity = initQuantity
      this.firm = initFirm
    }
  }
  // -------------------------
  class Firm {
    #registrationNumber
    get RegistrationNumber() {
      return this.#registrationNumber
    }
    set RegistrationNumber(newNumber) {
      if (typeof newNumber !== 'number') {
        throw new Error('Реєстраційний номер має мати лише цифри!')
      } else this.#registrationNumber = newNumber
    }
    constructor(initTitle, initRegistrationNumber) {
      this.title = initTitle
      this.RegistrationNumber = initRegistrationNumber
    }
  }
  // -------------------------
  class Storage {
    constructor() {
      this.products = []
    }

    addProduct(newProduct) {
      this.products.push(newProduct)
    }

    takeProduct(prodTitle, quantity) {
      let res = false
      this.products.forEach((el) => {
        if (el.title === prodTitle && el.Quantity >= quantity) {
          el.Quantity -= quantity
          res = true
        }
      })
      if (res === false) {
        throw new Error('Такого товару або такої кількості немає!')
      } else res
    }

    getFilteredByTitle(title) {
      return this.products.filter((el) => el.title === title)
    }
    getFilteredByFirm(firm) {
      return this.products.filter((el) => el.firm.title === firm)
    }

    toString() {
      return `На складі ${this.products.length} найменувань товарів!`
    }
  }

  // // ---- Перевірки ----------------------------------------------------
  const myStorage = new Storage()
  myStorage.addProduct(
    new Product('Огірки', 'кг.', 10, new Firm('Перша фірма', 2595))
  )
  myStorage.addProduct(
    new Product('Банани', 'кг.', 15, new Firm('Перша фірма', 2595))
  )
  myStorage.addProduct(
    new Product('Ананаси', 'кг.', 7, new Firm('Друга фірма', 3369))
  )
  myStorage.addProduct(
    new Product('Помідори', 'кг.', 20, new Firm('Друга фірма', 3369))
  )
  myStorage.addProduct(
    new Product('Картопля', 'кг.', 34, new Firm('Третя фірма', 4554))
  )

  console.log(myStorage.products)

  myStorage.takeProduct('Картопля', 10)
  myStorage.takeProduct('Ананаси', 5)

  document.write(`<p>${myStorage}</p>`)
  console.log(myStorage.getFilteredByTitle('Помідори'))
  console.log(myStorage.getFilteredByFirm('Друга фірма'))

  console.log(myStorage.products)
}
