'use strict'

// Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

function centimetersToInches(centimeters) {
  return centimeters / 2.54
}

function kilogramsToPounds(kilograms) {
  return kilograms / 0.45359237
}

function kilometersToMiles(kilometers) {
  return kilometers * 0.62137
}

let centimeters = parseInt(prompt(`Введіть кількість сантиметрів:`, `10`))
let kilograms = parseInt(prompt(`Введіть кількість кілограм:`, `10`))
let kilometers = parseInt(prompt(`Введіть кількість кілометрів:`, `10`))

let resInInches = centimetersToInches(centimeters)
let resInPounds = kilogramsToPounds(kilograms)
let resInMiles = kilometersToMiles(kilometers)

document.write(`<p>${centimeters} сантиметрів(-а) це 
    ${Math.round(resInInches)} дюйм(-и)<br>
    ${kilograms} кілограм(-а) це 
    ${Math.round(resInPounds)} фунта(-ів)<br>
    ${kilometers} кілометрів(-а) це 
    ${Math.round(resInMiles)} милі(-ь)</p>`)
