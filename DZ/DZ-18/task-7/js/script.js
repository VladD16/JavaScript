'use strict'

// Задача 7. Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з
// видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід,
// вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі.
// Підрахувати загальну вартість.

//====================================================

function getTotalSum() {
  const inputsEl = document.querySelectorAll('input')
  const selectsEl = document.querySelectorAll('select')
  let totalSum = 0
  for (const inpEl of inputsEl) {
    if (inpEl.checked) totalSum += parseFloat(inpEl.value)
  }
  for (const selEl of selectsEl) {
    totalSum += parseFloat(selEl.value)
  }

  const resEl = (document.getElementById('res').innerText = totalSum)
}

window.onload = function () {
  document.querySelector('.button').onclick = getTotalSum
}
