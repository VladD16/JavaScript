'use strict'

let numberOfWeeks = parseInt(prompt(`Введіть кількість тижнів:`))
let totalSum = 0

for (let week = 1; week <= numberOfWeeks; week++) {
  let oneWeekSum = 0
  for (let day = 1; day <= 7; day++) {
    let oneDaySum = parseFloat(
      prompt(`Введіть прибуток за день: ${day}, тиждень: ${week}`)
    )
    oneWeekSum += oneDaySum
  }
  document.write(
    `<p>Загальний прибуток за тиждень ${week}: ${oneWeekSum.toFixed(
      2
    )} грн.</p>`
  )
  totalSum += oneWeekSum
}

document.write(`<p>Загальна величина прибутку: ${totalSum.toFixed(2)} грн.</p>`)
