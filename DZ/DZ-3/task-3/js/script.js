'use strict'

let randomNumber = 1 + Math.floor(Math.random() * 5)

let attempt = parseInt(
  prompt('Спробуйте вгадати число від 1 до 5 (2 спроби!)', '1')
)

if (attempt === randomNumber) {
  document.write(`<p>Вітаю ви вгадали число ${randomNumber}!</p>`)
} else {
  alert(`Ви не вгадали:( спробуйте ще раз!`)

  attempt = parseInt(prompt('Остання спроба!', '1'))

  if (attempt === randomNumber) {
    document.write(`<p>Вітаю ви вгадали число ${randomNumber}!</p>`)
  } else {
    document.write(`<p>Нажаль ви використали всі спроби :(</p>`)
  }
}
