'use strict'

// Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну
// половину рядків і стовпців)
// 1) номери рядків від 0 до половини, стовпці від 0 до половини
// 2) номери рядків від 0 до половини, стовпці від половини до кінця
// 3) номери рядків (від половини до кінця, стовпці від 0 до половини
// 4) номери рядків від половини до кінця , стовпці від половини до кінця
// 5) cуму парних рядків
// 6) cуму непарних стовпців
// 7) у парних рядках – непарні стовпці, у непарних – парні.

if (confirm('Почати тестування?')) {
  let array = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
  ]

  // 1) номери рядків від 0 до половини, стовпці від 0 до половини
  function getFirstAreaSum(arr) {
    let sum = 0
    for (
      let rowNumber = 0;
      rowNumber < Math.floor(arr.length / 2);
      rowNumber++
    ) {
      for (
        let colNumber = 0;
        colNumber < Math.floor(arr[rowNumber].length / 2);
        colNumber++
      ) {
        sum += arr[rowNumber][colNumber]
      }
    }

    return sum
  }

  // 2) номери рядків від 0 до половини, стовпці від половини до кінця
  function getSecondAreaSum(arr) {
    let sum = 0
    for (let rowNum = 0; rowNum < Math.floor(arr.length / 2); rowNum++) {
      for (
        let colNum = Math.floor(arr[rowNum].length / 2);
        colNum < arr[rowNum].length;
        colNum++
      ) {
        sum += arr[rowNum][colNum]
      }
    }

    return sum
  }

  // 3) номери рядків (від половини до кінця, стовпці від 0 до половини
  function getThirdAreaSum(arr) {
    let sum = 0
    for (
      let rowNum = Math.floor(arr.length / 2);
      rowNum < arr.length;
      rowNum++
    ) {
      for (
        let colNum = 0;
        colNum < Math.floor(arr[rowNum].length / 2);
        colNum++
      ) {
        sum += arr[rowNum][colNum]
      }
    }

    return sum
  }

  // 4) номери рядків від половини до кінця , стовпці від половини до кінця
  function getFourthAreaSum(arr) {
    let sum = 0
    for (
      let rowNum = Math.floor(arr.length / 2);
      rowNum < arr.length;
      rowNum++
    ) {
      for (
        let colNum = Math.floor(arr[rowNum].length / 2);
        colNum < arr[rowNum].length;
        colNum++
      ) {
        sum += arr[rowNum][colNum]
      }
    }

    return sum
  }

  // 5) cуму парних рядків
  function getEvenRowsSum(arr) {
    let sum = 0
    for (let rowNum = 0; rowNum < arr.length; rowNum += 2) {
      for (let colNum = 0; colNum < arr[rowNum].length; colNum++) {
        sum += arr[rowNum][colNum]
      }
    }

    return sum
  }

  // 6) cуму непарних стовпців
  function getOddColumnsSum(arr) {
    let sum = 0
    for (let rowNum = 0; rowNum < arr.length; rowNum++) {
      for (let colNum = 1; colNum < arr[rowNum].length; colNum += 2) {
        sum += arr[rowNum][colNum]
      }
    }

    return sum
  }

  // 7) у парних рядках – непарні стовпці, у непарних – парні.
  function getOddAndEvenRes(arr) {
    let sum = 0
    for (let rowNum = 0; rowNum < array.length; rowNum++) {
      if (rowNum % 2 === 0) {
        for (let colNum = 1; colNum < arr[rowNum].length; colNum += 2) {
          sum += arr[rowNum][colNum]
        }
      } else {
        for (let colNum = 0; colNum < arr[rowNum].length; colNum += 2) {
          sum += arr[rowNum][colNum]
        }
      }
    }

    return sum
  }
  // Виклики функцій
  let firstAreaSum = getFirstAreaSum(array)
  let secondAreaSum = getSecondAreaSum(array)
  let thirdAreaSum = getThirdAreaSum(array)
  let fourthAreaSum = getFourthAreaSum(array)
  let evenRowsSum = getEvenRowsSum(array)
  let oddColumnsSum = getOddColumnsSum(array)
  let oddAndEvenRes = getOddAndEvenRes(array)
  // Вивід результату
  document.write(`<p>
    1) ${firstAreaSum} <br>
    2) ${secondAreaSum} <br>
    3) ${thirdAreaSum} <br>
    4) ${fourthAreaSum} <br>
    5) ${evenRowsSum} <br>
    6) ${oddColumnsSum} <br>
    7) ${oddAndEvenRes}
    </p>`)
}
