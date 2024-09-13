'use strict'

// Задача 3. Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”,
// починаючи з деякої заданої ситуації (тобто маємо двовимірний масив з елементами : 0 - нулик,
// Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи
// заповнення ще незаповнених клітинок (де пробіли). Поки можна не підраховувати чи вже є
// 3 хрестики чи 3 нулики у рядок.

if (confirm('Почати тестування?')) {
  let matr = [
    [' ', 1, 1],
    [' ', 0, ' '],
    [' ', 0, ' '],
  ]
  function generate(matr, freeItemsLeft) {
    if (freeItemsLeft === 0) console.log(JSON.stringify(matr))
    else {
      for (let i = 0; i < matr.length; i++) {
        for (let j = 0; j < matr[i].length; j++) {
          if (matr[i][j] === ' ') {
            //----- у вільну клітинку ставимо 0 і переглядаємо усі, що залишились вільні
            let matrCopy1 = JSON.parse(JSON.stringify(matr))
            matrCopy1[i][j] = 0
            generate(matrCopy1, freeItemsLeft - 1)
            //----- у вільну клітинку ставимо 1 і переглядаємо усі, що залишились вільні
            let matrCopy2 = JSON.parse(JSON.stringify(matr))
            matrCopy2[i][j] = 1
            generate(matrCopy2, freeItemsLeft - 1)
            return
          }
        }
      }
    }
  }
  generate(matr, 5)
}
