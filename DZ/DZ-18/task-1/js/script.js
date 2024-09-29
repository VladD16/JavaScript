'use strict'

// Задача 1. Розробити калькулятор

//====================================================

function getAdd() {
  const firstNumber = parseFloat(document.getElementById(`first`).value)
  const secondNumber = parseFloat(document.getElementById(`second`).value)
  const res = firstNumber + secondNumber
  document.getElementById('res').innerText = res
}
function getSub() {
  const firstNumber = parseFloat(document.getElementById(`first`).value)
  const secondNumber = parseFloat(document.getElementById(`second`).value)
  const res = firstNumber - secondNumber
  document.getElementById('res').innerText = res
}
function getMult() {
  const firstNumber = parseFloat(document.getElementById(`first`).value)
  const secondNumber = parseFloat(document.getElementById(`second`).value)
  const res = firstNumber * secondNumber
  document.getElementById('res').innerText = res
}
function getDiv() {
  const firstNumber = parseFloat(document.getElementById(`first`).value)
  const secondNumber = parseFloat(document.getElementById(`second`).value)
  const res = firstNumber / secondNumber
  document.getElementById('res').innerText = res.toFixed(2)
}

window.onload = function () {
  document.querySelector('.button-add').onclick = getAdd
  document.querySelector('.button-sub').onclick = getSub
  document.querySelector('.button-mult').onclick = getMult
  document.querySelector('.button-div').onclick = getDiv
}
