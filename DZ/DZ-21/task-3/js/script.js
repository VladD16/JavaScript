'use strict'

// Задача 3. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою
// і вставкою.

//====================================================

function getRandomNumber(min = 1, max = 800) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function generateArray(elementsQuantity) {
  const array = []
  for (let i = 0; i < elementsQuantity; i++) {
    const randomNumber = getRandomNumber()
    array.push(randomNumber)
  }
  return array
}

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
      }
    }
  } while (changed)
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
  }
  return arr
}

window.onload = () => {
  const newArray = generateArray(800)
  // ----------
  let start = new Date()
  const testArray1 = JSON.parse(JSON.stringify(newArray))
  bubbleSort(testArray1)
  let end = new Date()
  let dif = end - start
  console.log(`BubbleSort: ${dif} мс.`)
  // ----------
  start = new Date()
  const testArray2 = JSON.parse(JSON.stringify(newArray))
  insertionSort(testArray2)
  end = new Date()
  dif = end - start
  console.log(`InsertionSort: ${dif} мс.`)
}
