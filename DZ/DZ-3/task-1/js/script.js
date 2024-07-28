'use strict'

let firstChild = prompt(`Введіть перше ім'я`)
let secondChild = prompt(`Введіть друге ім'я`)

let firstChildCandies = parseInt(
  prompt(`Введіть кількість цукерок у '${firstChild}'`, '0')
)
let secondChildCandies = parseInt(
  prompt(`Введіть кількість цукерок у '${secondChild}'`, '0')
)

if (firstChildCandies > secondChildCandies) {
  document.write(`<p>У '${firstChild}' цукерок більше!</p>`)
} else if (firstChildCandies < secondChildCandies) {
  document.write(`<p>У '${secondChild}' цукерок більше!</p>`)
} else if (firstChildCandies === 0 && secondChildCandies === 0) {
  document.write(`<p>'${firstChild}' і '${secondChild}' не мають цукерок!</p>`)
} else {
  document.write(
    `<p>У '${firstChild}' і '${secondChild}' однакова кількість цукерок!</p>`
  )
}
