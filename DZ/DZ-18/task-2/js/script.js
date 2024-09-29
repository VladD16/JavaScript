'use strict'

// Задача 2. Зробити конвертер валют (курси валют – константи у скрипті)

//====================================================

const dollarsRate = 40
const eurosRate = 45

function convert() {
  const sumInUAH = parseFloat(document.getElementById('sumInUAH').value)
  const resInEu = sumInUAH / eurosRate
  const resInDol = sumInUAH / dollarsRate
  document.getElementById('resInEu').innerText = resInEu.toFixed(2)
  document.getElementById('resInDol').innerText = resInDol.toFixed(2)
}

window.onload = function () {
  document.querySelector('button').onclick = convert
}
