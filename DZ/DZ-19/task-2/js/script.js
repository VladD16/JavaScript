'use strict'

// Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично
// заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше
// за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)

//====================================================

document.addEventListener('input', (e) => {
  let changeEl = e.target
  let changeElTag = e.target.tagName
  // ------------------------------------

  if (changeElTag === 'INPUT') {
    const inputs = document.querySelectorAll('input')
    const inputsArray = [...inputs]
    let elIndex = inputsArray.indexOf(changeEl)

    let changeElValue = parseFloat(changeEl.value)
    for (let i = elIndex + 1; i < inputsArray.length; i++) {
      changeElValue++
      inputs[i].value = changeElValue
    }

    changeElValue = parseFloat(changeEl.value)
    for (let i = elIndex - 1; i >= 0; i--) {
      changeElValue--
      inputs[i].value = changeElValue
    }
  }
})
