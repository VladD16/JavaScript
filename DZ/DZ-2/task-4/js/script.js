'use strict'

let lengthCentimeters = parseInt(prompt('Введіть довжину в сантиметрах:', '0'))

let lengthMeters = lengthCentimeters / 100
let lengthKilometers = lengthMeters / 1000

document.write(`
    <table>
        <tr>
            <th>Довжина в сантиметрах:</th>
            <td>${lengthCentimeters} см.<td>
        </tr>
        <tr>
            <th>Довжина в метрах:</th>
            <td>${lengthMeters} м.<td>
        </tr>
        <tr>
            <th>Довжина в кілометрах:</th>
            <td>${lengthKilometers} к.<td>
        </tr>
    </table>`)
