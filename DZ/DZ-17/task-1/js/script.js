'use strict'

// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості
// додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

//====================================================

if (confirm('Почати тестування?')) {
  class ArrayOperations {
    static getPositiveCount(arr) {
      let res = arr.reduce(
        (prevCount, el) => (el >= 0 ? prevCount + 1 : prevCount),
        0
      )
      return res
    }
    static getNegativeCount(arr) {
      return arr.reduce(
        (prevCount, el) => (el < 0 ? prevCount + 1 : prevCount),
        0
      )
    }
    static getNumberCount(arr, userNumber) {
      const res = arr.reduce(
        (prevCount, el) => (el === userNumber ? prevCount + 1 : prevCount),
        0
      )
      return res === 0 ? `Числа ${userNumber} немає в масиві!` : res
    }
  }

  const testArr = [2, 5, 15, -27, -1, 0, -20, 5]

  console.log(ArrayOperations.getPositiveCount(testArr))
  console.log(ArrayOperations.getNegativeCount(testArr))
  console.log(ArrayOperations.getNumberCount(testArr, 10))
  console.log(ArrayOperations.getNumberCount(testArr, 5))
}
