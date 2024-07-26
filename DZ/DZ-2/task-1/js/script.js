"use strict"

let numberOne = parseFloat(prompt("Введіть перше число", "1"))
let numberTwo = parseFloat(prompt("Введіть  друге число", "1"))

let sum = numberOne + numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo

document.write(`
  <table>
    <tr>
      <th>Число 1:</th>
      <td>${numberOne}</td>
    </tr>
    <tr>
      <th>Число 2:</th>
      <td>${numberTwo}</td>
    </tr>
    <tr>
      <th>Сума:</th>
      <td>${sum}</td>
    </tr>
    <tr>
      <th>Добуток:</th>
      <td>${mult}</td>
    </tr>
    <tr>
      <th>Частка:</th>
      <td>${div}</td>
    </tr>
  </table>`)
