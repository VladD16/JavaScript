'use strict'

// Вивести на екран
// 1 1
// 2 1 2
// 3 1 2 3
// 4 1 2 3 4
// …
// i 1 2 3 ..i
// 23 1 2 3 .. 22 23

for (let firstNumber = 1; firstNumber <= 23; firstNumber++) {
  document.write(`<p>${firstNumber} `)
  for (let numberArray = 1; numberArray <= firstNumber; numberArray++) {
    document.write(`${numberArray} `)
  }
  document.write(`</p>`)
}
