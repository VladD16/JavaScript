'use strict'

// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі
// наступні повинні бути зафарбовані у червоний колір.

//=============================================================================

window.onload = () => {
  function addDivs(quantity, text) {
    for (let i = 0; i < quantity; i++) {
      let divEl = document.createElement('div')
      divEl.innerText = text
      document.body.append(divEl)
    }
  }

  addDivs(10, 'Hello!')

  // ----------------------------------------

  const clickActions = (e) => {
    let targetElement = e.target
    let targetElementTag = e.target.tagName

    // ------------------------------------------
    if (targetElementTag === 'DIV') {
      let currentEl = targetElement
      while (
        currentEl.nextElementSibling &&
        currentEl.nextElementSibling.tagName === 'DIV'
      ) {
        currentEl = currentEl.nextElementSibling
        currentEl.style.backgroundColor = 'red'
      }

      currentEl = targetElement
      currentEl.style.backgroundColor = 'green'
      while (
        currentEl.previousElementSibling &&
        currentEl.previousElementSibling.tagName === 'DIV'
      ) {
        currentEl = currentEl.previousElementSibling
        currentEl.style.backgroundColor = 'green'
      }
    }

    // ----------------------------------------
  }

  document.addEventListener('click', clickActions)
}
