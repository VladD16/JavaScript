'use strict'

// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та
// порівнянь чисел під час сортування змішуванням.

if (confirm('Почати тестування?')) {
  function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getGeneratedArray(elementsQuantity) {
    const arr = []
    for (let i = 0; i < elementsQuantity; i++) {
      let randomNum = getRandomNumber(1, 100)
      if (!arr.includes(randomNum)) {
        arr.push(randomNum)
      } else i--
    }
    return arr
  }

  // =================================================

  const generatedArray = getGeneratedArray(30)
  document.write(`<p>Оригінальний масив: ${generatedArray.join(`, `)}</p>`)

  let changedQuantity = 0
  let comparisonQuantity = 0

  // За зростанням ===================================

  let leftIndex = 0
  let rightIndex = generatedArray.length - 1

  while (leftIndex < rightIndex) {
    let changed = false
    for (let i = leftIndex; i < rightIndex; i++) {
      comparisonQuantity += 1
      if (generatedArray[i] > generatedArray[i + 1]) {
        let temp = generatedArray[i + 1]
        generatedArray[i + 1] = generatedArray[i]
        generatedArray[i] = temp
        changed = true
        changedQuantity += 1
      }
    }
    rightIndex--
    if (changed === false) break
    changed = false
    for (let i = rightIndex; i > leftIndex; i--) {
      comparisonQuantity += 1
      if (generatedArray[i] < generatedArray[i - 1]) {
        let temp = generatedArray[i - 1]
        generatedArray[i - 1] = generatedArray[i]
        generatedArray[i] = temp
        changed = true
        changedQuantity += 1
      }
    }
    leftIndex++
    if (changed === false) break
  }

  // За спаданням =====================================

  // let leftIndex = 0
  // let rightIndex = generatedArray.length - 1

  // while (leftIndex < rightIndex) {
  //   let changed = false
  //   for (let i = leftIndex; i < rightIndex; i++) {
  //     comparisonQuantity += 1
  //     if (generatedArray[i] < generatedArray[i + 1]) {
  //       let temp = generatedArray[i + 1]
  //       generatedArray[i + 1] = generatedArray[i]
  //       generatedArray[i] = temp
  //       changed = true
  //       changedQuantity += 1
  //     }
  //   }
  //   rightIndex--
  //   if (changed === false) break
  //   changed = false
  //   for (let i = rightIndex; i > leftIndex; i--) {
  //     comparisonQuantity += 1
  //     if (generatedArray[i] > generatedArray[i - 1]) {
  //       let temp = generatedArray[i - 1]
  //       generatedArray[i - 1] = generatedArray[i]
  //       generatedArray[i] = temp
  //       changed = true
  //       changedQuantity += 1
  //     }
  //   }
  //   leftIndex++
  //   if (changed === false) break
  // }

  document.write(`<p>Відсортований масив: ${generatedArray.join(`, `)} <br>
    Кількість порівнянь: ${comparisonQuantity} <br>
    Кількість обмінів: ${changedQuantity}
    </p>`)
}
