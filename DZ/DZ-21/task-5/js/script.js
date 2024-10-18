'use strict'

// Задача 5. Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість
// днів придатності. Визначити чи є він придатним на даний момент.

//====================================================

function getProducedDate() {
  let producedDate = new Date(document.getElementById('input-1').value)
  return producedDate
}

function getExpirationDate() {
  let expirationDate = parseInt(document.getElementById('input-2').value)
  return expirationDate
}

function getRes() {
  const currentDate = new Date()
  let producedDate = getProducedDate()
  let expirationDate = getExpirationDate()
  producedDate.setDate(producedDate.getDate() + expirationDate)

  const resEl = document.getElementById('res')
  if (producedDate.getDate() >= currentDate.getDate()) {
    resEl.innerText = 'Придатний!'
    resEl.style.color = 'yellow'
  } else {
    resEl.innerText = 'Непридатний!'
    resEl.style.color = 'red'
  }
}

window.onload = () => {
  document.getElementById('input-1').oninput = getProducedDate
  document.getElementById('input-2').oninput = getExpirationDate
  document.getElementById('button').onclick = getRes
}
