'use strict'

// Задача 6. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік).
// Знайти найстаршого студента

//====================================================

const studentsList = [
  {
    name: 'Bogdan',
    birthday: '15.10.1999',
  },
  {
    name: 'Olga',
    birthday: '4.11.2000',
  },
  {
    name: 'Vlad',
    birthday: '16.5.1999',
  },
  {
    name: 'Max',
    birthday: '7.3.1998',
  },
  {
    name: 'Yulia',
    birthday: '18.12.1997',
  },
  {
    name: 'John',
    birthday: '19.7.1997',
  },
]

function parseDate(dateString) {
  const [day, month, year] = dateString.split('.')
  return new Date(year, month - 1, day)
}

const studentsListCopy = JSON.parse(JSON.stringify(studentsList))
const filteredStudentsList = studentsListCopy.sort(
  (el1, el2) => parseDate(el1.birthday) - parseDate(el2.birthday)
)

const oldestStudent = filteredStudentsList[0].name
console.log(`Найстарший студент: ${oldestStudent}`)
