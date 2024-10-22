'use strict'

// Задача 3.

//====================================================

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
// const strings = ['hello', 'world123', 'foo42bar', 'example', 'test56']
// const res = strings.filter((str) => /\d/.test(str))
// console.log(res)
// ---------------------------------------------------
// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
// const strings = ['hello', 'world123', 'foo42bar', 'example', 'test56']
// const res = strings.filter((str) => !/\d/.test(str))
// console.log(res)
// ---------------------------------------------------
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
// const strings = ['hello', 'world123', 'foo42bar', 'example', 'test56']
// const res = strings.filter((str) => /[aeiouAEIOU]/.test(str))
// console.log(res)
// ---------------------------------------------------
// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
// const strings = ['hello', 'world123', 'foo42bar', 'example', 'test56']
// const res = strings.filter((str) => !/[aeiouAEIOU]/.test(str))
// console.log(res)
// ---------------------------------------------------
// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
// const strings = ['hello', 'world123', 'foo42bar', 'example', 'test56']
// const res = strings.filter((str) => /(1|3)/.test(str))
// console.log(res)
// ---------------------------------------------------
// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
// const text =
//   'On May 15th, 2023, a total of 250 participants completed the marathon'
// const res = text.match(/\d+/g)
// console.log(res)
// ---------------------------------------------------
// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
// const text =
//   'On May 15th, 2023, a total of 250 participants completed the marathon/'
// const res = text.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)
// console.log(res)
// ---------------------------------------------------
// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
// const text =
//   'On May 15th, 2023, a total of 250 participants completed the marathon/'
// const res = text.split(/[.,\/#!$%\^&\*;:{}=\-_`~()]/).filter((el) => el.trim())
// console.log(res)
// ---------------------------------------------------
// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у
// форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
// const text = '15.05.2023, a total of 250 participants completed the marathon/'
// const res = /\b\d{2}\.\d{2}\.\d{4}\b/.test(text)
// console.log(res)
// ---------------------------------------------------
// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
// const text = '15.05.2023, a total of 250 participants completed the marathon/'
// if (/\b\d{2}\b/.test(text)) {
//   const elements = text.match(/\b\d{2}\b/g)
//   console.log(elements)
//   const res = elements.length
//   console.log(res)
// } else console.log('таких немає')
// ---------------------------------------------------
// Задача 11. Визначити чи може бути рядок тексту номером банківської картки
// (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
// const text =
//   'Вчора я зустрівся з другом, і він поділився своїм новим номером картки: 4142-3433-2323-3434. Це було досить несподівано. "На роботі ми обговорювали бюджет на наступний місяць, і директор показав нам номер своєї корпоративної картки: 5123-4567-8910-1121. Цікаво, що все це значить."'
// if (/\b\d{4}-\d{4}-\d{4}-\d{4}\b/.test(text)) {
//   const elements = text.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g)
//   console.log(elements)
//   const res = elements.length
//   console.log(res)
// } else console.log('таких немає')
// ---------------------------------------------------
// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
// const text = 'www.whitehouse.gov'
// const text2 = 'rozetka.com.ua'
// const res = /.gov\b/.test(text)
// console.log(res)
// const res2 = /.gov\b/.test(text2)
// console.log(res2)
// ---------------------------------------------------
// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
// const text =
//   'In the year 2020, the world faced an unprecedented challenge with the outbreak of the COVID-19 pandemic. By 2021, vaccines were being rolled out globally, offering hope for a return to normalcy. Fast forward to 2022, people began to adapt to the new normal, incorporating remote work and virtual events into their daily lives. Looking ahead to 2023, the focus shifted towards rebuilding economies and strengthening global cooperation. By 2024, advancements in technology and medicine promise a brighter future, with new innovations leading the way.'
// if (/\b(202[2-9]|20[3-9]\d|2[1-9]\d{2}|[3-9]\d{3})\b/.test(text)) {
//   const res = text.match(/\b(202[2-9]|20[3-9]\d|2[1-9]\d{2}|[3-9]\d{3})\b/g)
//   console.log(res)
// } else console.log('таких немає')
// ---------------------------------------------------
// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України
// (починаєтсья на «+38»)
// const tel = '+380660000000'
// const tel2 = '+390660000000'
// const res = /^\+38/.test(tel)
// console.log(res)
// const res2 = /^\+38/.test(tel2)
// console.log(res2)
// ---------------------------------------------------
// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на
// дефіс.
// const userName = 'John Smith'
// console.log(userName)
// const res = userName.replace(' ', '-')
// console.log(res)
// ---------------------------------------------------
// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення
// дати у форматі «день/місяць/рік»
// const userDate = '07.10.1999'
// console.log(userDate)
// const res = userDate.replaceAll('.', '/')
// console.log(res)
// ---------------------------------------------------
// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити,
// чи  є це день вихідним
// function checkDay(userDay) {
//   const day = userDay.toLowerCase()
//   const res = /^(sun|sat|0|6)$/.test(day)
//   if (res) console.log('Це вихідний!')
//   else console.log('Це не вихідний!')
// }
// checkDay('mon')
// checkDay('Fri')
// checkDay('Sun')
// checkDay('sun')
// checkDay('6')
// checkDay('3')
