'use strict'

// Задача 1. Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати
// кількість змін протягом одного сеансу.

//=============================================================================

function setBackgroundColor() {
  const inputValue = document.getElementById('color-input').value
  document.body.style.backgroundColor = inputValue
  localStorage.setItem('backgroundColor', inputValue)
  localStorage.setItem('inputValue', inputValue)
  let resInput = document.getElementById('res')
  let resValue = parseInt(resInput.value)
  resValue++
  resInput.value = resValue
}

function userLocal() {
  const backgroundColor = localStorage.getItem('backgroundColor')
  const inputValue = localStorage.getItem('inputValue')
  document.body.style.backgroundColor = backgroundColor
  document.getElementById('color-input').value = inputValue
}

window.onload = () => {
  userLocal()
  document.getElementById('color-input').onchange = setBackgroundColor
}
