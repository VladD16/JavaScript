'use strict'

// Задача 1. Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі
// підмножини заданого масиву. Наприклад, для масиву [1, 2, 3] можливі
// підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].

if (confirm('Почати тестування?')) {
  function generate(arr, res) {
    if (arr.length === 0) console.log(res)
    else {
      generate(arr.slice(1), [...res])
      generate(arr.slice(1), [...res, arr[0]])
    }
  }

  let arr = [1, 2, 3]
  generate(arr, [])
}
