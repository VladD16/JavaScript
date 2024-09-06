'use strict'

// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та
// порівнянь чисел під час сортування включеннями.

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

  let comparisonQuantity = 0
  let changedQuantity = 0

  // За зростанням ===================================

  for (let k = 1; k < generatedArray.length; k++) {
    const currentElement = generatedArray[k]
    let i = k - 1
    comparisonQuantity += 1
    while (i >= 0 && generatedArray[i] > currentElement) {
      changedQuantity += 1
      comparisonQuantity += 1
      generatedArray[i + 1] = generatedArray[i]
      i--
    }
    generatedArray[i + 1] = currentElement
  }

  // За спаданням ===================================

  //   for (let k = 1; k < generatedArray.length; k++) {
  //     const currentElement = generatedArray[k]
  //     let i = k - 1
  //     while (i >= 0 && generatedArray[i] < currentElement) {
  //       generatedArray[i + 1] = generatedArray[i]
  //       i--
  //       changedQuantity += 1
  //       comparisonQuantity += 1
  //     }
  //     generatedArray[i + 1] = currentElement
  //     comparisonQuantity -= 1
  //   }

  // =================================================
  document.write(`<p>Відсортований масив: ${generatedArray.join(`, `)} <br>
     Кількість порівнянь: ${comparisonQuantity} <br>
     Кількість обмінів: ${changedQuantity}
    </p>`)
}
