'use strict'
// =============================================
// Задача 1. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і
// максимальне.
// --------
// const ages = [7, 10, 8, 14, 16, 8, 9, 10, 11, 11, 12, 7, 9, 13, 13, 14, 15]

// let res = new Map()
// for (const el of ages) {
//   if (res.has(el)) {
//     res.set(el, res.get(el) + 1)
//   } else {
//     res.set(el, 1)
//   }
// }
// let maxAge = Math.max(...ages)
// console.log(res)
// console.log(maxAge)
// =============================================
// Задача 2.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
// --------
// const books = [
//   { title: 'Title 1', year: 1960, author: 'Author 1' },
//   { title: 'Title 2', year: 1949, author: 'Author 2' },
//   { title: 'Title 3', year: 1925, author: 'Author 2' },
//   { title: 'Title 4', year: 1967, author: 'Author 3' },
//   { title: 'Title 5', year: 1851, author: 'Author 1' },
// ]

// const authorBookCount = new Map()
// for (const book of books) {
//   if (authorBookCount.has(book.author)) {
//     authorBookCount.set(book.author, authorBookCount.get(book.author) + 1)
//   } else {
//     authorBookCount.set(book.author, 1)
//   }
// }
// console.log(authorBookCount)
// =============================================
// Задача 3. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін).
// Підрахувати для кожного клієнта кількість відвідувань.
// --------
// const users = [
//   'user1',
//   'user2',
//   'user1',
//   'user3',
//   'user2',
//   'user1',
//   'user4',
//   'user3',
//   'user2',
// ]
//
// const userCount = new Map()
// for (const user of users) {
//   if (userCount.has(user)) {
//     userCount.set(user, userCount.get(user) + 1)
//   } else {
//     userCount.set(user, 1)
//   }
// }
// console.log(userCount)
// =============================================
// Задача 4. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та
// кількість студентів кожного з курсів.
// --------
// const students = [
//   { name: 'Іван Іванов', course: 1, faculty: 'Фізико-математичний' },
//   { name: 'Марія Петрівна', course: 2, faculty: 'Біологічний' },
//   { name: 'Петро Сидоров', course: 4, faculty: 'Економічний' },
//   { name: 'Анастасія Коваленко', course: 4, faculty: 'Економічний' },
//   { name: 'Олександр Шевченко', course: 1, faculty: 'Медичний' },
// ]
//
// const facultys = new Set(students.map((el) => el.faculty))
// console.log(`${facultys.size} різних факультетів`)
//
// const studentsCount = new Map()
// for (const student of students) {
//   if (studentsCount.has(student.course)) {
//     studentsCount.set(student.course, studentsCount.get(student.course) + 1)
//   } else {
//     studentsCount.set(student.course, 1)
//   }
// }
// console.log(studentsCount)
// =============================================
// Задача 5. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// --------
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// const temperaturesCount = new Map()
// for (const temperature of temperatures) {
//   if (temperaturesCount.has(temperature)) {
//     temperaturesCount.set(temperature, temperaturesCount.get(temperature) + 1)
//   } else {
//     temperaturesCount.set(temperature, 1)
//   }
// }
// console.log(temperaturesCount)
// --------
// // Заокруглити вверх значення та підрахувати кількість різних показів.
// --------
// const roundedTemperatures = temperatures.map((el) => Math.ceil(el))
// const res = new Set(roundedTemperatures)
// console.log(`Кількість різних показів після заокруглення: ${res.size}`)
// =============================================
// Задача 6. Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати
// скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати
// скільки всього студентів відвідують хоча б один гурток.
// --------
// const namesArray1 = ['John', 'Alice', 'Bob', 'Eve', 'Charlie']
// const namesArray2 = ['Alice', 'David', 'Frank', 'Bob', 'John']
// const s1 = new Set(namesArray1)
// const s2 = new Set(namesArray2)
//
// const res1 = s1.intersection(s2)
// console.log(res1)
// console.log(res1.size)
// const res2 = s1.union(s2)
// console.log(res2)
// console.log(res2.size)
// =============================================
