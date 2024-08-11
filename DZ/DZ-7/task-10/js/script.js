'use strict'

// Дано покази температур (довільна кількість). Розробити функцію, яка
// дозволить знайти середнє значення для додатних показів температури.

function getNegativeNumbers(
  firstIndicator,
  secondIndicator,
  thirdIndicator,
  fourthIndicator,
  fifthIndicator
) {
  let positiveNumbersQuantity = 0
  let totalPositiveNumbersSum = 0

  if (firstIndicator > 0) {
    positiveNumbersQuantity += 1
    totalPositiveNumbersSum += firstIndicator
  }
  if (secondIndicator > 0) {
    positiveNumbersQuantity += 1
    totalPositiveNumbersSum += secondIndicator
  }
  if (thirdIndicator > 0) {
    positiveNumbersQuantity += 1
    totalPositiveNumbersSum += thirdIndicator
  }
  if (fourthIndicator > 0) {
    positiveNumbersQuantity += 1
    totalPositiveNumbersSum += fourthIndicator
  }
  if (fifthIndicator > 0) {
    positiveNumbersQuantity += 1
    totalPositiveNumbersSum += fifthIndicator
  }

  return totalPositiveNumbersSum / positiveNumbersQuantity
}

let firstIndicator = parseInt(
  prompt(`Введіть перший показник температури:`, `0`)
)
let secondIndicator = parseInt(
  prompt(`Введіть другий показник температури:`, `0`)
)
let thirdIndicator = parseInt(
  prompt(`Введіть третій показник температури:`, `0`)
)
let fourthIndicator = parseInt(
  prompt(`Введіть четвертий показник температури:`, `0`)
)
let fifthIndicator = parseInt(
  prompt(`Введіть п'ятий показник температури:`, `0`)
)

let res = getNegativeNumbers(
  firstIndicator,
  secondIndicator,
  thirdIndicator,
  fourthIndicator,
  fifthIndicator
)
document.write(
  `<p>Середнє значення для додатних показів температури: ${Math.round(res)}</p>`
)
