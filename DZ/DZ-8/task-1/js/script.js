'use strict'

// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії
// він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно),
// трійочник(є хоча би одна трійка)).

if (confirm('Почати тестування?')) {
  function getMarksArray(subjectsQuantity) {
    const marksArray = []

    for (let i = 0; i < subjectsQuantity; i++) {
      let mark = parseInt(prompt(`Введіть оцінку з ${i + 1} предмету:`))
      marksArray.push(mark)
    }

    return marksArray
  }

  //-------------------------------------------

  function getAverageMark(array) {
    let totalMark = 0

    for (let mark = 0; mark < array.length; mark++) {
      totalMark += array[mark]
    }

    let averageMark = totalMark / array.length

    return averageMark
  }

  //-------------------------------------------

  function getStudentStatus(array) {
    let studentStatus
    let minMark = 5

    for (let mark = 0; mark < array.length; mark++) {
      if (array[mark] < minMark) minMark = array[mark]
    }

    switch (minMark) {
      case 2:
        studentStatus = `двійочник`
        break
      case 3:
        studentStatus = `трійочник`
        break
      case 4:
        studentStatus = `хорошист`
        break
      case 5:
        studentStatus = `відмінник`
        break
    }

    return studentStatus
  }

  //-------------------------------------------

  let quantityOfSubjects = parseInt(prompt(`Введіть кількість предметів`))

  let marks = getMarksArray(quantityOfSubjects)
  let averageMark = getAverageMark(marks)
  let studentStatus = getStudentStatus(marks)

  document.write(`<p>Учень має оцінки: ${marks} <br>
      Середній бал: ${averageMark.toFixed(1)} <br>
      Це - ${studentStatus}</p>`)
}
