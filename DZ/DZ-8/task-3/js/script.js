'use strict'

// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm('Почати тестування?')) {
  function getNamesArray(namesQuantity) {
    const namesArray = []
    for (let name = 1; name <= namesQuantity; name++) {
      let studentName = prompt(`Введіть ім'я ${name} учня:`)
      namesArray.push(studentName)
    }

    return namesArray
  }

  let studentsQuantity = parseInt(prompt(`Введіть кількість учнів:`))
  let namesArray = getNamesArray(studentsQuantity)

  let ivansQuantity = 0

  for (let name = 0; name < namesArray.length; name++) {
    if (namesArray[name].toLowerCase() === 'ivan') {
      ivansQuantity += 1
    }
  }

  document.write(`<p>Кількість Іванів: ${ivansQuantity}</p>`)
}
