'use strict'

// Задача 3. Користувач задає рік народження. Визначити кількість років користувача.

//====================================================

function getAge() {
  const currentYear = new Date().getFullYear()
  const userYearOfBirth = parseFloat(document.getElementById('year').value)
  if (userYearOfBirth > 0 && userYearOfBirth < currentYear) {
    const age = currentYear - userYearOfBirth
    document.getElementById('res').innerText = age + ' років'
  }
}

window.onload = function () {
  document.getElementById('year').onchange = getAge
}
