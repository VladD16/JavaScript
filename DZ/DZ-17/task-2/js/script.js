'use strict'

// Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна
// було створити тільки один екземпляр цього класу.

//====================================================

if (confirm('Почати тестування?')) {
  class CompanyCar {
    static companyCar
    constructor(driver, model, number) {
      if (CompanyCar.companyCar) return CompanyCar.companyCar

      this.driver = driver
      this.model = model
      this.number = number

      CompanyCar.companyCar = this
    }

    toString() {
      return `${this.driver}, ${this.model}, ${this.number}`
    }
  }

  const companyCar1 = new CompanyCar('Vlad', 'BMW', 1111)
  const companyCar2 = new CompanyCar('Max', 'Audi', 2222)

  console.log(companyCar1)
  console.log(companyCar2)
  document.write(`<p>${companyCar1}</p>`)
  document.write(`<p>${companyCar2}</p>`)
}
