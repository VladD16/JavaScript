'use strict'

let goodsPrice = parseFloat(
  prompt('Введіть вартість одиниці товару: грн.', '0')
)
let goodsQuantity = parseInt(prompt('Введіть кількість товару:', '1'))

let totalPrice = goodsPrice * goodsQuantity
let tax = (totalPrice / 100) * 5

document.write(`
    <table>
        <tr>
            <th>Загальна вартість:</th>
            <td>${totalPrice.toFixed(2)} грн.<td>
        </tr>
        <tr>
            <th>ПДВ(5% від загальної вартості):</th>
            <td>${tax.toFixed(2)} грн.<td>
        </tr>
    </table>`)
