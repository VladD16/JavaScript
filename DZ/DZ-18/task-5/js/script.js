'use strict'

// Задача 5. Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і
// вставити на сторінку)

//====================================================

function getRandomValue(min = 1, max = 10) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function getTable(rows = 4, cols = 4) {
  const table = document.createElement('table')
  document.body.append(table)
  const tBody = document.createElement('tbody')
  table.append(tBody)
  for (let row = 0; row < rows; row++) {
    const tRow = document.createElement('tr')
    for (let tCol = 0; tCol < cols; tCol++) {
      const tCol = document.createElement('td')
      tCol.innerText = getRandomValue()
      tRow.append(tCol)
    }
    tBody.append(tRow)
  }
}

window.onload = function () {
  getTable(3, 4)
  //   getTable()
}
