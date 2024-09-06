'use strict'

// Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення
// відповідних таблиць за зразком.
// Тобто кожного разу після обміну елементів вивести поточний стан масиву на
//  екран (стрілки не потрібні).

if (confirm('Почати тестування?')) {
  // ======= BubbleSort ==============
  function bubbleSort(arr) {
    let changed
    do {
      changed = false
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = temp
          changed = true
          console.log(arr)
        }
      }
    } while (changed)
    return arr
  }
  // ======= CoctailSort ==============
  function cocktailSort(arr) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex < rightIndex) {
      let changed = false
      for (let i = leftIndex; i < rightIndex; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i + 1]
          arr[i + 1] = arr[i]
          arr[i] = temp
          changed = true
          console.log(arr)
        }
      }
      rightIndex--
      if (changed === false) break
      changed = false
      for (let i = rightIndex; i > leftIndex; i--) {
        if (arr[i] < arr[i - 1]) {
          let temp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = temp
          changed = true
          console.log(arr)
        }
      }
      leftIndex++
      if (changed === false) break
    }
    return arr
  }
  // ======= InsertionSort ==============
  function insertionSort(arr) {
    for (let k = 1; k < arr.length; k++) {
      const currentElement = arr[k]
      let i = k - 1
      while (i >= 0 && arr[i] > currentElement) {
        arr[i + 1] = arr[i]
        i--
      }
      arr[i + 1] = currentElement
      console.log(arr)
    }
    return arr
  }
  // ======= SelectionSort ==============
  function selectionSort(arr) {
    const prevLastIndex = arr.length - 2
    for (let i = 0; i < prevLastIndex; i++) {
      let minIndex = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      if (i !== minIndex) {
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
        console.log(arr)
      }
    }
    return arr
  }
  // =====================================
  function getRandomNumber(min = 1, max = 10) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getGeneretedArray(elementsQuantity) {
    return new Array(elementsQuantity)
      .fill(0)
      .map((el) => (el = getRandomNumber()))
  }
  // =====================================
  const testArray = getGeneretedArray(5)
  console.log(testArray)

  const testArray1 = JSON.parse(JSON.stringify(testArray))
  console.log(`---BubbleSort---`)
  console.log(bubbleSort(testArray1))

  const testArray2 = JSON.parse(JSON.stringify(testArray))
  console.log(`---CoctailSort---`)
  console.log(cocktailSort(testArray2))

  const testArray3 = JSON.parse(JSON.stringify(testArray))
  console.log(`---InsertionSort---`)
  console.log(insertionSort(testArray3))

  const testArray4 = JSON.parse(JSON.stringify(testArray))
  console.log(`---SelectionSort---`)
  console.log(selectionSort(testArray4))
  // =====================================
}
