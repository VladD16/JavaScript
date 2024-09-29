'use strict'

// Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті
// формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на
// кнопку “get sum” і знаходить середнє значення.

//====================================================

function getTable() {
  const userChoice = parseFloat(document.getElementById('gradesNumber').value)
  const field = document.querySelector('.field')
  if (userChoice > 0 && !field.querySelector('table')) {
    const table = document.createElement('table')
    field.append(table)
    const tBody = document.createElement('tbody')
    table.append(tBody)
    for (let row = 0; row < userChoice; row++) {
      const tRow = document.createElement('tr')
      const tCol = document.createElement('td')
      const input = document.createElement('input')
      input.classList.add('table-input')
      input.setAttribute('type', 'number')
      input.setAttribute('value', '0')
      tCol.append(input)
      tRow.append(tCol)
      tBody.append(tRow)
    }
    // --------------------------------------------
    const button = document.createElement('button')
    button.classList.add('button', 'button-sum')
    button.setAttribute('type', 'button')
    button.innerText = 'Get sum'
    field.append(button)
    // --------------------------------------------
    const divRes = document.createElement('div')
    divRes.classList.add('line')
    const title = (document.createElement('span').innerText = 'Результат:')
    divRes.append(title)
    const res = document.createElement('span')
    res.classList.add('res')
    res.setAttribute('id', 'res')
    divRes.append(res)
    field.append(divRes)
    //--------------------------------------
    const buttonRestart = document.createElement('button')
    buttonRestart.classList.add('button', 'button-restart')
    buttonRestart.setAttribute('type', 'button')
    buttonRestart.innerText = 'Restart'
    field.append(buttonRestart)
    buttonRestart.onclick = reloadPage
    // --------------------------------------------
    button.onclick = getAverageValue
    buttonRestart.onclick = reloadPage
  }
}
// ==================================================================================
function getAverageValue() {
  const valuesList = document.querySelectorAll('.table-input')
  let totalSum = 0
  valuesList.forEach((el) => {
    totalSum += parseFloat(el.value)
  })
  const res = totalSum / valuesList.length
  const resField = document.getElementById('res')
  resField.innerText = res.toFixed(1)
}
// ==================================================================================
function reloadPage() {
  location.reload()
}
// ==================================================================================
window.onload = function () {
  document.querySelector('.button-quantity').onclick = getTable
}
