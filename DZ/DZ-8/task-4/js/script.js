'use strict'

// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
//  •	починаються на букву «А»;
//  •	перша і остання літери співпадають;
//  •	складаються з більше ніш 5 символів;

if (confirm('Почати тестування?')) {
  function getCarNumbers(carsQuantity) {
    const carNumbersArray = []

    for (let number = 1; number <= carsQuantity; number++) {
      let carNumber = prompt(`Введіть номер автомобіля ${number}:`)
      carNumbersArray.push(carNumber)
    }

    return carNumbersArray
  }

  const carsQuantity = parseInt(prompt(`Введіть кількість автомобілів:`))
  const carNumbersArray = getCarNumbers(carsQuantity)

  let firsConditionQuantity = 0
  let secondConditionQuantity = 0
  let thirdConditionQuantity = 0

  for (let i = 0; i < carNumbersArray.length; i++) {
    if (carNumbersArray[i].charAt(0).toLowerCase() === 'a') {
      firsConditionQuantity += 1
    }
    if (
      carNumbersArray[i].charAt(0).toLowerCase() ===
      carNumbersArray[i].charAt(carNumbersArray[i].length - 1).toLowerCase()
    ) {
      secondConditionQuantity += 1
    }
    if (carNumbersArray[i].length > 5) {
      thirdConditionQuantity += 1
    }
  }

  document.write(`<p>Кількість номерів, які починаються на букву «А»: ${firsConditionQuantity} <br>
      Кількість номерів, в яких перша і остання літери співпадають: ${secondConditionQuantity} <br>
      Кількість номерів, які складаються з більше ніш 5 символів: ${thirdConditionQuantity}
      </p>`)
}
