'use strict'

let productFirstPrice = parseFloat(
  prompt('Вартість першого товару: (грн.)', '0')
)
let productFirstQuantity = parseInt(
  prompt('Кількість одиниць першого товару: (шт.)', '0')
)

let productSecondPrice = parseFloat(
  prompt('Вартість другого товару: (грн.)', '0')
)
let productSecondQuantity = parseInt(
  prompt('Кількість одиниць другого товару: (шт.)', '0')
)

let productThirdPrice = parseFloat(
  prompt('Вартість третього товару: (грн.)', '0')
)
let productThirdQuantity = parseInt(
  prompt('Кількість одиниць третього товару: (шт.)', '0')
)

let totalFirstPrice = (productFirstPrice * productFirstQuantity).toFixed(2)
let totalSecondPrice = (productSecondPrice * productSecondQuantity).toFixed(2)
let totalThirdPrice = (productThirdPrice * productThirdQuantity).toFixed(2)

let totalPrice =
  parseFloat(totalFirstPrice) +
  parseFloat(totalSecondPrice) +
  parseFloat(totalThirdPrice)

document.write(`
    <table>
        <tr>
            <th>Товар</th>
            <th>Кількість <br> (шт.)</th>
            <th>Ціна за штуку <br> (грн)</th>
            <th>Загальна ціна <br> (грн)</th>
        </tr>
        <tr>
           <th>Перший товар</th>
           <td>${productFirstQuantity}</td>
           <td>${productFirstPrice}</td>
           <td>${totalFirstPrice}</td>
        </tr>
        <tr>
           <th>Другий товар</th>
           <td>${productSecondQuantity}</td>
           <td>${productSecondPrice}</td>
           <td>${totalSecondPrice}</td>
        </tr>
        <tr>
           <th>Третій товар</th>
           <td>${productThirdQuantity}</td>
           <td>${productThirdPrice}</td>
           <td>${totalThirdPrice}</td>
        </tr>
        <tr>
           <th class="span">До сплати:</th>
           <td class="span">${totalPrice} грн.</td>
        </tr>
   </table>`)
