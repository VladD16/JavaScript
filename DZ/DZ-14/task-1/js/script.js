'use strict'

// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// - назва компанії на час розробки (назву періодично змінюють)
// - власник компанії
// - споснсори (масив спонсорів)
//       * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// - рік випуску
// - вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

//====================================================

if (confirm('Почати тестування?')) {
  const webSitesList = [
    {
      company: 'Tech Innovators Inc.',
      owner: 'John Smith',
      sponsors: [
        {
          secondName: 'Johnson',
          firstName: 'Emily',
          investmentAmount: 1500,
        },
        {
          secondName: 'Brown',
          firstName: 'Michael',
          investmentAmount: 1700,
        },
      ],
      year: 1999,
      price: 4500,
    },
    {
      company: 'Tech Innovators Inc.',
      owner: 'John Smith',
      sponsors: [
        {
          secondName: 'Johnson',
          firstName: 'Emily',
          investmentAmount: 1800,
        },
        {
          secondName: 'Davis',
          firstName: 'Sarah',
          investmentAmount: 3500,
        },
        {
          secondName: 'Brown',
          firstName: 'Michael',
          investmentAmount: 1700,
        },
      ],
      year: 2001,
      price: 9000,
    },
    {
      company: 'Web Solutions Ltd.',
      owner: 'John Smith',
      sponsors: [
        {
          secondName: 'Wilson',
          firstName: 'David',
          investmentAmount: 3500,
        },
        {
          secondName: 'Brown',
          firstName: 'Michael',
          investmentAmount: 1200,
        },
        {
          secondName: 'Moore',
          firstName: 'James',
          investmentAmount: 2200,
        },
        {
          secondName: 'Martin',
          firstName: 'Olivia',
          investmentAmount: 1300,
        },
      ],
      year: 2003,
      price: 11200,
    },
    {
      company: 'Web Solutions Ltd.',
      owner: 'John Smith',
      sponsors: [
        {
          secondName: 'Wilson',
          firstName: 'David',
          investmentAmount: 3500,
        },
        {
          secondName: 'Taylor',
          firstName: 'Jessica',
          investmentAmount: 77500,
        },
        {
          secondName: 'Moore',
          firstName: 'James',
          investmentAmount: 2200,
        },
        {
          secondName: 'Anderson',
          firstName: 'Daniel',
          investmentAmount: 22300,
        },
      ],
      year: 2005,
      price: 217700,
    },
  ]

  // 1) ======  загальна вартість усіх сайтів ============
  let totalWebSitesPrice = webSitesList.reduce(
    (prevPrice, site) => prevPrice + site.price,
    0
  )

  // 2) ==== кількість сайтів, що було зроблено між 2000 та 2009 рр. =========
  let sitesQuantityForPeriod = webSitesList.reduce(
    (totalQuantity, site) =>
      site.year >= 2000 && site.year <= 2009
        ? totalQuantity + 1
        : totalQuantity,
    0
  )

  // 3) ==== кількість сайтів, де сума спонсорських вкладень була більшою за 100000 =====
  let sitesQuantityMore100000 = webSitesList.reduce(
    (totalQuantity, site) =>
      site.sponsors.reduce(
        (totalSum, person) => person.investmentAmount + totalSum,
        0
      ) > 100000
        ? totalQuantity + 1
        : totalQuantity,
    0
  )

  // 4) ==== створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати
  //  усі у масив) =======
  const personList = []
  for (const site of webSitesList) {
    site.sponsors.forEach((el) =>
      personList.push(`${el.firstName} ${el.secondName}`)
    )
  }

  // 5) ===== знайти рік, коли прибуток був найбільшим ======
  let maxPrice = -Infinity
  for (const site of webSitesList) {
    site.price > maxPrice ? (maxPrice = site.price) : maxPrice
  }

  // 6) ====== упорядкувати список за спаданням прибутку =======
  const sortedList = JSON.parse(JSON.stringify(webSitesList))
  sortedList.sort((el1, el2) => el2.price - el1.price)
  console.log(`==== Відсортований список ====`)
  console.log(sortedList)

  // 7) ====== Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість
  //  до 10000 і більше 10000 =======

  const sitesMore10000 = webSitesList.filter((el) => el.price > 10000)
  const sitesLess10000 = webSitesList.filter((el) => el.price <= 10000)

  console.log(`==== Меньше або рівно 10000 ====`)
  console.log(sitesLess10000)
  console.log(`==== Більше 10000 ====`)
  console.log(sitesMore10000)

  // ===== Вивід результатів ================================================================
  document.write(`<p>
    1) ${totalWebSitesPrice} <br>
    2) ${sitesQuantityForPeriod} <br>
    3) ${sitesQuantityMore100000} <br>
    4) ${personList.join(`, `)} <br>
    5) ${maxPrice} <br>
    6) Результат в консолі <br>
    7) Результат в консолі 
    </p>`)
}
