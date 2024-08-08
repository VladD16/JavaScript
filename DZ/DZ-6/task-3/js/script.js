'use strict'

// Щоденно спортзал відвідує певна кількість людей. Користувач вводить такі дані: скільки людей
// відвідало спортзал за день та вік кожного відвідувача. Потрібно вивести вік найстаршого та
// наймолодшого відвідувачів, а також середній вік всіх відвідувачів спортзалу за день.

let totalPeopleSum = parseInt(
  prompt(`Скільки людей відвідало спортзал за день:`)
)

let totalAge = 0
let minAge = Infinity
let maxAge = 0 // або '-Infinity' якщо значення можуть бути негативними

for (let person = 1; person <= totalPeopleSum; person++) {
  let personAge = parseInt(prompt(`Введіть вік відвідувача ${person}:`))
  totalAge += personAge
  if (personAge < minAge) {
    minAge = personAge
  }
  if (personAge > maxAge) {
    maxAge = personAge
  }
}

let averageAge = totalAge / totalPeopleSum

document.write(
  `<p>Середній вік всіх відвідувачів спортзалу за день: ${Math.round(
    averageAge
  )}</p>`
)
document.write(`<p>Вік найстаршого відвідувача: ${maxAge}</p>`)
document.write(`<p>Вік наймолодшого відвідувача: ${minAge}</p>`)
