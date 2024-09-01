'use strict'

// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок,
// за вівторок, і т.д.);
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку),
// тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні
// двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде
// зрозуміло, який з елементів повинен іти раніше).

if (confirm('Почати тестування?')) {
  let income = [
    [1200, 1500, 1300, 1600, 1700, 1800, 1400],
    [1100, 1400, 1200, 1500, 1600, 1700, 1300],
    [1000, 1300, 1100, 1400, 1500, 1600, 11200],
    [4900, 1200, 1000, 1300, 1400, 1500, 1100],
    [800, 1100, 900, 1200, 1300, 1400, 11000],
  ]

  // 1) загальний прибуток кожного масиву за тиждень;
  function getIncomeForWeeks(arr) {
    let newArr = []
    for (let rowNum = 0; rowNum < arr.length; rowNum++) {
      let totalSum = 0
      for (let colNum = 0; colNum < arr[rowNum].length; colNum++) {
        totalSum += arr[rowNum][colNum]
      }
      newArr.push(totalSum)
    }

    return newArr
  }

  // 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок,
  // за вівторок, і т.д.);
  function getIncomeForDays(arr) {
    let newArr = []
    for (let i = 0; i < 7; i++) {
      let totalDaySum = 0
      for (let rowNum = 0; rowNum < arr.length; rowNum++) {
        totalDaySum += arr[rowNum][i]
      }

      newArr.push(totalDaySum)
    }

    return newArr
  }

  // 3) загальний прибуток за робочі дні
  function getTotalIncomeForWorkingDays(arr) {
    let sum = 0
    for (let rowNum = 0; rowNum < arr.length; rowNum++) {
      for (let colNum = 0; colNum <= 4; colNum++) {
        sum += arr[rowNum][colNum]
      }
    }
    return sum
  }

  // 4) загальний прибуток за вихідні дні
  function getTotalIncomeForWeekend(arr) {
    let sum = 0
    for (let rowNum = 0; rowNum < arr.length; rowNum++) {
      for (let colNum = 5; colNum <= 6; colNum++) {
        sum += arr[rowNum][colNum]
      }
    }
    return sum
  }

  // 5) максимальний прибуток за середу
  function getMaxIncomeForWednesday(arr) {
    let newArr = []
    for (let rowNum = 0; rowNum < arr.length; rowNum++) {
      let incomeForDay = arr[rowNum][2]
      newArr.push(incomeForDay)
    }
    let maxValue = Math.max(...newArr)
    return maxValue
  }

  // 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
  function getMoreTwoHundredValues(arr) {
    return arr.flat(Infinity).filter((el) => el > 200)
  }

  // 7) відсортувати кожен тиждень за зростанням
  function getSortWeeksFirst(arr) {
    let newArr = JSON.parse(JSON.stringify(arr))
    for (let week = 0; week < arr.length; week++) {
      newArr[week].sort((el1, el2) => el1 - el2)
    }

    return newArr
  }

  // 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку),
  // тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
  function getSortWeeksSecond(arr) {
    let newArr = JSON.parse(JSON.stringify(arr))
    return newArr.sort((el1, el2) => Math.max(...el2) - Math.max(...el1))
  }

  // 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні
  // двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде
  // зрозуміло, який з елементів повинен іти раніше).

  function getSortWeeksThird(arr) {
    let newArr = JSON.parse(JSON.stringify(arr))
    return newArr.sort(
      (el1, el2) =>
        el2.reduce((sum, el) => sum + el) - el1.reduce((sum, el) => sum + el)
    )
  }

  // Виклики функцій
  let incomeForWeeks = getIncomeForWeeks(income)
  let incomeForDays = getIncomeForDays(income)
  let totalIncomeForWorkingDays = getTotalIncomeForWorkingDays(income)
  let totalIncomeForWeekend = getTotalIncomeForWeekend(income)
  let maxIncomeForWednesday = getMaxIncomeForWednesday(income)
  let moreTwoHundredValues = getMoreTwoHundredValues(income)
  let sortWeeksFirst = getSortWeeksFirst(income)
  let sortWeeksSecond = getSortWeeksSecond(income)
  let sortWeeksThird = getSortWeeksThird(income)

  // Вивід результату
  document.write(`<p>
    1) ${incomeForWeeks.join(`, `)} <br>
    2) ${incomeForDays.join(`, `)} <br>
    3) ${totalIncomeForWorkingDays} <br>
    4) ${totalIncomeForWeekend} <br>
    5) ${maxIncomeForWednesday} <br>
    6) ${moreTwoHundredValues.join(`, `)} <br>
    7) ${sortWeeksFirst.join(` // `)} <br>
    8) ${sortWeeksSecond.join(` // `)} <br>
    9) ${sortWeeksThird.join(` // `)} <br>
    </p>`)
}
