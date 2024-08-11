'use strict'

// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить
// підрахувати кількість від’ємних показів температури.

function getNegativeNumbers(
  firstIndicator,
  secondIndicator,
  thirdIndicator,
  fourthIndicator,
  fifthIndicator
) {
  let negativeNumbersQuantity = 0

  if (firstIndicator < 0) negativeNumbersQuantity += 1
  if (secondIndicator < 0) negativeNumbersQuantity += 1
  if (thirdIndicator < 0) negativeNumbersQuantity += 1
  if (fourthIndicator < 0) negativeNumbersQuantity += 1
  if (fifthIndicator < 0) negativeNumbersQuantity += 1

  return negativeNumbersQuantity
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
document.write(`<p>Кількість від’ємних показів температури: ${res}</p>`)
