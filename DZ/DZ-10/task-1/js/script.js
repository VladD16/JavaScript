'use strict'

// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)

if (confirm('Почати тестування?')) {
  function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  const userChoiceQuantity = parseInt(
    prompt(`Введіть кількість цін в масиві:`, `5`)
  )

  const userArray = []
  for (let i = 0; i < userChoiceQuantity; i++) {
    let randomPrice = getRandomNumber(1, 10000)
    userArray.push(randomPrice)
  }

  //////////////////////////////////////////////////////////////////////////////

  // 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
  let moreThousandPrices = userArray.filter((el) => el > 1000)

  // 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
  let moreThousandIndexes = userArray.reduce((newArr, el, index) => {
    if (el > 1000) newArr.push(index)
    return newArr
  }, [])

  // 3)Сформувати список з тих цін, які більші за попереднє значення
  let pricesHigherThanPrevious = userArray.reduce((newArr, el, index, arr) => {
    if (arr[index] > arr[index - 1]) newArr.push(el)
    return newArr
  }, [])

  // 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
  let maxValue = Math.max(...userArray)
  let percentOfMaximum = userArray.map((el) => (el / maxValue) * 100)
  let percentOfMaximumFixed = percentOfMaximum.map((el) => el.toFixed(1) + `%`)

  // 5)Підрахувати кількість змін цін
  let totalChangePrice = userArray.reduce((totalChange, el, index, arr) => {
    if (arr[index] > arr[index + 1] || arr[index] < arr[index + 1])
      totalChange += 1
    return totalChange
  }, 0)

  // 6)Визначити, чи є ціна, що менше 1000
  let priceLessThousand = userArray.some((el) => el < 1000)

  // 7)Визначати, чи усі ціни більше за 1000
  let allPricesOverThousand = userArray.every((el) => el > 1000)

  // 8)Підрахувати кількість цін, що більше за 1000

  let totalPricesOverThousand = userArray.reduce(
    (total, el) => (el > 1000 ? (total += 1) : total),
    0
  )

  // 9)Підрахувати суму цін, що більше за 1000
  let sumPricesOverThousand = userArray.reduce((sum, el) =>
    el > 1000 ? (sum += el) : sum
  )

  // 10)Знайти першу ціну, що більше за 1000
  let firstOverThousandPrice = userArray.find((el) => el > 1000)

  // 11)Знайти індекс першої ціни, що більше за 1000
  let firstIndexOverThousandPrice = userArray.findIndex((el) => el > 1000)

  // 12)Знайти останню ціну, що більше за 1000
  let lastOverThousandPrice = userArray.findLast((el) => el > 1000)

  // 13)Знайти індекс останньої ціни, що більше за 1000
  let lastIndexOverThousandPrice = userArray.findLastIndex((el) => el > 1000)

  //////////////////////////////////////////////////////////////////////////////
  document.write(`<p>
      Масив цін: ${userArray.join(`, `)} <br>
      1) ${moreThousandPrices.join(`, `)} <br>
      2) ${moreThousandIndexes.join(`, `)} <br>
      3) ${pricesHigherThanPrevious.join(`, `)} <br>
      4) ${percentOfMaximumFixed.join(`, `)} <br>
      5) ${totalChangePrice} <br>
      6) ${priceLessThousand} <br>
      7) ${allPricesOverThousand} <br>
      8) ${totalPricesOverThousand} <br>
      9) ${sumPricesOverThousand} <br>
      10) ${firstOverThousandPrice} <br>
      11) ${firstIndexOverThousandPrice} <br>
      12) ${lastOverThousandPrice} <br>
      13) ${lastIndexOverThousandPrice}
    </p>`)
}
