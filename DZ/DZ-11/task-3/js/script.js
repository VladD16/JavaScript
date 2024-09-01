'use strict'

// Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується
// 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено
// усі кораблі або у користувача не закінчаться снаряди.

if (confirm('Почати тестування?')) {
  const playingField = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]

  function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  for (let i = 0; i < 5; i++) {
    let randomRow = getRandomNumber(0, 5)
    let randomRCol = getRandomNumber(0, 5)
    if (playingField[randomRow][randomRCol] === 0)
      playingField[randomRow][randomRCol] = 1
    else {
      i--
      continue
    }
  }

  ///////////////////////////////////////////////////////////

  alert(`Вгадайте координати 5 кораблів за 10 спроб!`)
  let rowNum
  let colNum
  let userChoice

  let sunkenShips = 0
  let shipNumber = 1

  for (let i = 1; i <= 10; i++) {
    alert(`Спроба ${i}`)

    rowNum = parseInt(
      prompt(`Введіть номер рядка корабля ${shipNumber} (від 0 до 5)`, `0`)
    )
    if (rowNum < 0 || rowNum > 5) {
      alert(`Введено некоректний номер! Почніть спочатку (:`)
      i--
      continue
    }
    colNum = parseInt(
      prompt(`Введіть номер колонки корабля ${shipNumber} (від 0 до 5)`, `0`)
    )
    if (colNum < 0 || colNum > 5) {
      alert(`Введено некоректний номер! Почніть спочатку (:`)
      i--
      continue
    }
    userChoice = playingField[rowNum][colNum]

    if (userChoice === 1) {
      sunkenShips += 1
      shipNumber += 1
      alert(`Вітаю! Ви підбили корабель ${sunkenShips}!`)
      if (sunkenShips === 5) {
        alert(`Вітаю ви потопили всі кораблі!`)
        break
      }
    } else alert(`Не вгадали (: Спробуйте ще раз!`)
  }

  if (sunkenShips < 5)
    alert(`Нажаль ви програли (: Підбито ${sunkenShips} з 5 кораблів!`)
}
