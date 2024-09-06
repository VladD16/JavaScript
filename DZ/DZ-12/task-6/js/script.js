'use strict'

// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи
// є у масиві ім’я довжиною 5 символів і під яким індексом.

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

  // ===== InsertionSort =================
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentElementLength = arr[i].length
      let currentElement = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j].length > currentElementLength) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = currentElement
    }
    return arr
  }
  // ====== BinarySearch ================
  function binarySearch(arr, searchLength, start, end) {
    if (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (arr[middle].length === searchLength) return middle
      if (arr[middle].length < searchLength)
        return binarySearch(arr, searchLength, middle + 1, end)
      if (arr[middle].length > searchLength)
        return binarySearch(arr, searchLength, start, middle - 1)
    } else return 'елемент не існує'
  }
  // ====================================
  insertionSort(userNames)
  document.write(`<p>Відсортований масив: ${userNames}</p>`)
  let elementIndex = binarySearch(userNames, 5, 0, userNames.length - 1)
  document.write(`<p>Елемент має індекс: ${elementIndex}</p>`)
}
