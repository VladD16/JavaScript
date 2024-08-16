'use strict'

// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може
// собі дозволити користувач (кількість грошей задається).

if (confirm('Почати тестування?')) {
  function getProductsInfo(productsQuantity) {
    const productsTitles = []
    const productsPrices = []

    for (let product = 1; product <= productsQuantity; product++) {
      let productTitle = prompt(`Введіть назву товара ${product}:`)
      productsTitles.push(productTitle)

      let productPrice = parseFloat(prompt(`Введіть ціну товара ${product}:`))
      productsPrices.push(productPrice)
    }

    return [productsTitles, productsPrices]
  }

  let productsQuantity = parseInt(prompt('Введіть кількість товарів:'))
  let productsInfo = getProductsInfo(productsQuantity)

  let userMoney = parseFloat(prompt(`Введіть скільки у Вас є грошей:`))
  let productsForUser = ''

  for (let i = 0; i < productsInfo[1].length; i++) {
    if (productsInfo[1][i] <= userMoney) {
      productsForUser += productsInfo[0][i] + ' '
    }
  }

  document.write(`<p>Ви можете собі дозволити купити: ${productsForUser}</p>`)
}
