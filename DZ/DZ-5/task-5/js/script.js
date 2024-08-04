'use strict'

let oddNumbers = 0
let evenNumbers = 0

for (let i = 1; i <= 100; i++) {
  let randomNumber = 1 + Math.floor(Math.random() * 1000)
  randomNumber % 2 === 1 ? (oddNumbers += 1) : (evenNumbers += 1)
  console.log(randomNumber)
}

document.write(`<p>Парних числе: ${evenNumbers}</p>`)
document.write(`<p>Непарних числе: ${oddNumbers}</p>`)

if (oddNumbers > evenNumbers) {
  document.write(`<p>Непарних числе більше на ${oddNumbers - evenNumbers}!</p>`)
} else if (oddNumbers < evenNumbers) {
  document.write(`<p>Парних числе більше на ${evenNumbers - oddNumbers}!</p>`)
} else {
  document.write(`<p>Парних і непарних чисел однакова кількість!</p>`)
}
