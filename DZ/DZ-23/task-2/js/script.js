'use strict'

// ==================================================================
// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера
// виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)
// ----------
// class PhoneNumber {
//   #number

//   get Number() {
//     return this.#number
//   }
//   set Number(newNumber) {
//     if (newNumber.length !== 10) {
//       throw new Error('В номері має бути 10 цифр!')
//     } else this.#number = newNumber
//   }

//   constructor(number) {
//     this.Number = number
//   }

//   [Symbol.toPrimitive](hint) {
//     if (hint === 'string') {
//       if (/^050|095|066/.test(this.#number)) {
//         return `${this.#number} - Vodafon`
//       } else if (/^096|097/.test(this.#number)) {
//         return `${this.#number} - Kyivstar`
//       } else if (/^063|073/.test(this.#number)) {
//         return `${this.#number} - Lifecell`
//       } else {
//         return `${this.#number} - Unknown Operator`
//       }
//     } else if (hint === 'number') {
//       return parseInt(this.#number)
//     }
//     return this.#number
//   }
// }

// Test
// const number1 = new PhoneNumber('0660000000')
// console.log(`${number1}`)
// const number2 = new PhoneNumber('0970000000')
// console.log(`${number2}`)
// const number3 = new PhoneNumber('0730000000')
// console.log(`${number3}`)
// const number4 = new PhoneNumber('0900000000')
// console.log(`${number4}`)
// ==================================================================
// Задача 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна,
// кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента
// виводився рядок «товар-загальна вартість»
// ----------
// class Product {
//   #price
//   #quantity

//   get Price() {
//     return this.#price
//   }
//   set Price(newPrice) {
//     if (newPrice < 0) {
//       throw new Error('Ціна не може бути меньше нуля!')
//     } else this.#price = newPrice
//   }

//   get Quantity() {
//     return this.#quantity
//   }
//   set Quantity(newQuantity) {
//     if (newQuantity < 0) {
//       throw new Error('Кількість не може бути меньше нуля!')
//     } else this.#quantity = newQuantity
//   }

//   constructor(title, price, quantity) {
//     this.title = title
//     this.Price = price
//     this.Quantity = quantity
//   }

//   totalPrice() {
//     return this.#price * this.#quantity
//   }

//   [Symbol.toPrimitive](hint) {
//     let res
//     switch (hint) {
//       case 'number':
//         res = this.#price
//         break
//       case `string`:
//         res = `Товар - ${this.title}, ціна - ${this.#price}, кількість - ${
//           this.#quantity
//         }`
//         break
//       default:
//         res = null
//     }
//     return res
//   }
// }

// class Shop {
//   constructor() {
//     this.productsList = []
//   }

//   addProduct(prod) {
//     this.productsList.push(prod)
//   }

//   [Symbol.iterator]() {
//     let index = 0
//     const products = this.productsList
//     return {
//       next() {
//         if (index < products.length) {
//           const product = products[index]
//           index++
//           return {
//             value: `${product.title} - ${product.totalPrice()}`,
//             done: false,
//           }
//         } else {
//           return { done: true }
//         }
//       },
//     }
//   }
// }

// const shop = new Shop()
// try {
//   shop.addProduct(new Product('Prod1', 25, 750))
//   shop.addProduct(new Product('Prod2', 255, 36))
//   shop.addProduct(new Product('Prod3', 124, 27))
//   shop.addProduct(new Product('Prod4', 35, 1070))
//   shop.addProduct(new Product('Prod4', 27, 624))
// } catch (error) {
//   console.log(error)
//   console.log(error.message)
// }

// Використання ітератора
// for (const prod of shop) {
//   console.log(prod)
// }

// ==================================================================
// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість
// парних чисел.
// ----------
// function* evenNumberGenerator(userCount) {
//   let generateCount = 0
//   while (generateCount < userCount) {
//     const randomEvenNumber = Math.floor(Math.random() * 100) * 2
//     generateCount++
//     yield randomEvenNumber
//   }
// }

// // Використання генератора
// const generator = evenNumberGenerator(10)
// for (const evenNumber of generator) {
//   console.log(evenNumber)
// }

// ==================================================================
