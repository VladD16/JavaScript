'use strict'

// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи
// є у масиві ім’я «Olga» і під яким індексом.

if (confirm('Почати тестування?')) {
  const userNames = [
    `Vlad`,
    `Vadim`,
    `Oleg`,
    `Max`,
    `Olga`,
    `Bob`,
    `Jack`,
    `Rob`,
  ]

  document.write(`<p>Оригінальний масив: ${userNames}</p>`)

  // ======= InsertionSort ==============
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentElement = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = currentElement
    }
    return arr
  }
  // ====== BinarySearch ================
  function binarySearch(arr, searchElement, start, end) {
    if (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (arr[middle] === searchElement) return middle
      if (arr[middle] < searchElement)
        return binarySearch(arr, searchElement, middle + 1, end)
      if (arr[middle] > searchElement)
        return binarySearch(arr, searchElement, start, middle - 1)
    } else return `елемент не існує`
  }

  // ====================================

  insertionSort(userNames)
  document.write(`<p>Відсортований масив: ${userNames}</p>`)
  let searchIndex = binarySearch(userNames, `Olga`, 0, userNames.length - 1)
  document.write(`<p>Елемент має індекс: ${searchIndex}</p>`)
}
