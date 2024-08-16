'use strict'

// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
//--- номери днів, протягом яких кількість відвідувачів була меншою за 20;
//--- номери днів, коли кількість відвідувачів була мінімальною;
//--- номери днів, коли кількість відвідувачів була максимальною;
//--- загальну кількість клієнтів у робочі дні та окремо загальну кількість клієнтів на вихідних.

if (confirm('Почати тестування?')) {
  const clientsForWeek = []

  for (let day = 1; day <= 7; day++) {
    let clientsNumberForDay = parseInt(
      prompt(`Введіть кількість відвідувачів за день ${day}:`)
    )
    clientsForWeek.push(clientsNumberForDay)
  }

  //---------------------------------
  const leastTwentyClients = []

  for (let day = 0; day < clientsForWeek.length; day++) {
    if (clientsForWeek[day] < 20) {
      leastTwentyClients.push(day + 1)
    }
  }
  //---------------------------------
  let minNumber = Infinity
  let maxNumber = 0

  for (let day = 0; day < clientsForWeek.length; day++) {
    if (clientsForWeek[day] <= minNumber) {
      minNumber = clientsForWeek[day]
    }
    if (clientsForWeek[day] >= maxNumber) {
      maxNumber = clientsForWeek[day]
    }
  }

  let minClientsNumberDays = []
  let maxClientsNumberDays = []

  for (let day = 0; day < clientsForWeek.length; day++) {
    if (clientsForWeek[day] === minNumber) {
      minClientsNumberDays.push(day + 1)
    }
    if (clientsForWeek[day] === maxNumber) {
      maxClientsNumberDays.push(day + 1)
    }
  }
  //---------------------------------
  let totalWeekendClients = 0
  let totalWorkingDaysClients = 0

  for (let day = 0; day < clientsForWeek.length; day++) {
    if (day > clientsForWeek.length - 3) {
      totalWeekendClients += clientsForWeek[day]
    }
    if (day < clientsForWeek.length - 2) {
      totalWorkingDaysClients += clientsForWeek[day]
    }
  }
  //---------------------------------

  document.write(
    `<p>Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${leastTwentyClients} <br>
  Номери днів, коли кількість відвідувачів була мінімальною: ${minClientsNumberDays}<br>
  Номери днів, коли кількість відвідувачів була максимальною:${maxClientsNumberDays}<br>
  Загальна кількість клієнтів у робочі дні: ${totalWorkingDaysClients}<br>
  Загальна кількість клієнтів на вихідних: ${totalWeekendClients}</p>`
  )
}
