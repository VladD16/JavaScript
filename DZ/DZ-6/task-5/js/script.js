'use strict'

// Розпочавши тренування, спортсмен першого дня пробіг 10 км. Щодня він збільшував денну норму
// на 10% від норми попереднього дня. Який сумарний шлях пробіжить спортсмен за 7 днів? Якого дня
// вперше спортсмен пробіжить понад 20 км? Якого дня вперше сумарний шлях перевищить 60 км?

let firstDistance = 10
let totalDistance = firstDistance
let oneDayDistance = firstDistance

for (let dayNumber = 1; dayNumber < 7; dayNumber++) {
  oneDayDistance += oneDayDistance * 0.1
  totalDistance += oneDayDistance
}

document.write(
  `<p>За 7 днів спортсмен сумарно пробіжить: ${totalDistance.toFixed(
    1
  )} км.</p>`
)

///////////////////////////////////////

oneDayDistance = firstDistance
let day = 0

do {
  oneDayDistance += oneDayDistance * 0.1
  day++
} while (oneDayDistance < 20)

document.write(`<p>На ${day} день вперше спортсмен пробіжить понад 20 км</p>`)

///////////////////////////////////////

totalDistance = firstDistance
oneDayDistance = firstDistance
day = 0

do {
  oneDayDistance += oneDayDistance * 0.1
  totalDistance += oneDayDistance
  day++
} while (totalDistance < 60)

document.write(`<p>На ${day} день вперше сумарний шлях перевищить 60 км</p>`)
