"use strict"

let yearOfBirthday = parseInt(prompt("Введіть рік народження", "1999"))
let currentYear = 2024

let age = currentYear - yearOfBirthday

document.write(`
    <table>
    <tr>
      <th>Дата народження:</th>
      <td>${yearOfBirthday}</td>
    </tr>
    <tr>
      <th>Поточний рік:</th>
      <td>${currentYear}</td>
    </tr>
    <tr>
      <th>Вік:</th>
      <td>${age}</td>
    </tr>
    </table>`)
