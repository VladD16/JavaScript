'use strict'

// Задача 3. Об’єкт “Фірма” (використати члени-класи)
// === Поля ===
// - назва фірми;
// - дата заснування (рік, місяць);
//  -послуги (назва послуги, вартість, термін виконання);
// - адреси філіалів (країна, місто, вулиця, номер будинку);
// === Методи ===
// - визначення кількості років існування фірми;
// - виведення всіх філіалів фірми у вказаному місті;
// - виведення на екран послуг, що можуть бути виконані за вказану суму грошей та
//  вказаний термін часу;

//====================================================

if (confirm('Почати тестування?')) {
  class Company {
    constructor(initTitle, initYear, initMonth) {
      this.title = initTitle
      this.date = {
        year: initYear,
        month: initMonth,
      }
      this.services = []
      this.addresses = []
    }

    getTotalYears() {
      const date = new Date()
      return date.getFullYear() - this.date.year
    }

    getAllAddressInCity(city) {
      const addresses = []
      for (const address of this.addresses) {
        if (address.city === city) {
          const newAddress = `${address.street} ${address.number}`
          addresses.push(newAddress)
        }
      }

      return addresses
    }

    getAllPossibleServices(price, time) {
      const services = []
      for (const service of this.services) {
        if (service.price <= price && service.time <= time) {
          const newService = `${service.title}`
          services.push(newService)
        }
      }

      return services
    }

    toString() {
      return `Компанія ${this.title} заснована ${this.date.month}.${this.date.year}`
    }
  }

  class Address {
    constructor(initCountry, initCity, initStreet, initNumber) {
      const address = {
        country: initCountry,
        city: initCity,
        street: initStreet,
        number: initNumber,
      }

      return address
    }
  }
  class Service {
    constructor(initTitle, initPrice, initTime) {
      const service = {
        title: initTitle,
        price: initPrice,
        time: initTime,
      }

      return service
    }
  }

  // --------------------------------------------------------------------------------
  const myCompany = new Company('The_Best_Company', 2007, 11)
  myCompany.addresses.push(
    new Address('United States', 'New York', '123 Broadway Ave', '10A')
  )
  myCompany.addresses.push(
    new Address('United Kingdom', 'London', '45 Oxford Street', '5B')
  )
  myCompany.addresses.push(
    new Address('United Kingdom', 'London', '789 King Street', '16')
  )

  myCompany.services.push(new Service('Website Development', 2500, 21))
  myCompany.services.push(new Service('Mobile App Design', 4000, 30))
  myCompany.services.push(new Service('SEO Optimization', 750, 7))
  myCompany.services.push(new Service('Graphic Design Package', 900, 5))

  console.log(myCompany)
  // --------------------------------------------------------------------------------
  document.write(`<p>${myCompany}</p>`)
  document.write(`<p>${myCompany.getTotalYears()}</p>`)
  document.write(
    `<p>${myCompany.getAllAddressInCity('London').join(` // `)}</p>`
  )
  document.write(
    `<p>${myCompany.getAllPossibleServices(1000, 30).join(` // `)}</p>`
  )
}
