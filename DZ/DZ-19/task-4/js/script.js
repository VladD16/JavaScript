'use strict'

// Задача 4. Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь
// із клітинок, то до відповідної таблиці додається червона рамка (спробуйте додати можливість
// відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього
// атрибута).

//====================================================

window.onload = () => {
  function getRandomNumber(min = 1, max = 10) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function generateTable(rows = 3, columns = 3) {
    const table = document.createElement('table')
    const tBody = document.createElement('tBody')
    table.append(tBody)
    for (let row = 0; row < rows; row++) {
      const tRow = document.createElement('tr')
      for (let col = 0; col < columns; col++) {
        const tCol = document.createElement('td')
        tCol.innerText = getRandomNumber()
        tRow.append(tCol)
      }
      tBody.append(tRow)
    }
    return table
  }

  function addTables(quantity) {
    for (let i = 1; i <= quantity; i++) {
      const tablesContainer = document.querySelector('.tables-container')

      const tableContainer = document.createElement('div')
      tableContainer.classList.add('table', `table-${i}`)
      tablesContainer.append(tableContainer)

      const title = document.createElement('h2')
      title.innerText = `Таблиця ${i}`
      tableContainer.append(title)

      const inputEl = document.createElement('input')
      inputEl.setAttribute('value', '0')
      inputEl.disabled = true
      tableContainer.append(inputEl)

      const table = generateTable()
      tableContainer.append(table)
    }
  }

  addTables(3)

  const clickActions = (e) => {
    const currentEl = e.target
    const currentElTag = e.target.tagName

    if (currentElTag === 'TD') {
      const currentTable = currentEl.closest('table')
      currentTable.style.border = '5px solid red'

      const inputEl = currentTable.previousElementSibling
      let currentValue = parseFloat(inputEl.value)
      currentValue++
      inputEl.value = currentValue
    }
  }

  document.addEventListener('click', clickActions)
}
