'use strict'

// У бригаді, що працює на сінокосі, є N сінокосарок. Перша сінокосарка працювала m годин, а
// кожна наступна на 10 хв більше, ніж попередня. Скільки годин працювала вся бригада?

let hayMowerNumber = parseInt(
  prompt(`Введіть кількість сінокосарок в бригаді:`)
)
let firstHayMowerHours = parseInt(
  prompt(`Введіть скільки годин працювала перша сінокосарка:`)
)
let firstHayMowerMinutes = parseInt(
  prompt(`Введіть скільки хвилин працювала перша сінокосарка:`)
)

let firstHayMowerTime = firstHayMowerHours * 60 + firstHayMowerMinutes
let totalTime = firstHayMowerTime
let oneHayMowerTime = firstHayMowerTime

for (let i = 1; i < hayMowerNumber; i++) {
  oneHayMowerTime += 10
  totalTime += oneHayMowerTime
}

let totalHours = Math.floor(totalTime / 60)
let totalMinutes = totalTime % 60

document.write(
  `<p>Загальний час роботи бригади ${totalHours} год. ${totalMinutes} хв.</p>`
)
