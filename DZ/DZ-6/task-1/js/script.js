'use strict'

// Інвестор вклав S тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. Визначити за
// допомогою циклів суму, яку він одержить.

let investSum = parseFloat(prompt(`Введіть суму вкладу: (грн.)`))
let totalSum = investSum
let tax = 0.05
let rate = 0.2

for (let yearNumber = 1; yearNumber <= 20; yearNumber++) {
  let profit = totalSum * rate
  let netIncome = profit - profit * tax
  totalSum += netIncome
}

document.write(
  `<p>Вклад ${investSum} грн. під 20% принесе ${totalSum.toFixed(
    2
  )} грн. через 20 років з урахуванням податку 5% від суми прибутку кожен рік</p>`
)
