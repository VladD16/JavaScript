'use strict'

let productPrice = parseFloat(prompt('Введіть ціну товару (грн.)', '0'))
let money = parseFloat(prompt('Введіть кількість грошей (грн.)', '0'))
let restMoney = money - productPrice

if (productPrice > money) {
  document.write(`<p>Вибачте, у вас недостатньо грошей!</p>`)
} else if (restMoney >= 4) {
  document.write(`<p>Пропонуємо купити ще лотерею за 4 гривні!</p>`)
} else {
  document.write(`<p>Дякуємо за покупку!</p>`)
}
