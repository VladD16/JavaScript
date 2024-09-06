'use strict'

// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та
// порівнянь чисел під час сортування бульбашкою

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

  let changed
  do {
    changed = false
    for (let i = 1; i < generatedArray.length; i++) {
      comparisonQuantity += 1
      if (generatedArray[i - 1] > generatedArray[i]) {
        let tmp = generatedArray[i - 1]
        generatedArray[i - 1] = generatedArray[i]
        generatedArray[i] = tmp
        changed = true
        changedQuantity += 1
      }
    }
  } while (changed)

  // За спаданням =====================================

  //   let changed
  //   do {
  //     changed = false
  //     for (let i = 1; i < generatedArray.length; i++) {
  //       if (generatedArray[i - 1] < generatedArray[i]) {
  //         let tmp = generatedArray[i - 1]
  //         generatedArray[i - 1] = generatedArray[i]
  //         generatedArray[i] = tmp
  //         changed = true
  //       }
  //     }
  //   } while (changed)

  document.write(`<p>Відсортований масив: ${generatedArray.join(`, `)} <br>
    Кількість порівнянь: ${comparisonQuantity} <br>
    Кількість обмінів: ${changedQuantity}
    </p>`)
}
