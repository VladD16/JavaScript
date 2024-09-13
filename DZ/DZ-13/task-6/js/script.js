'use strict'

// Задача 6. З використанням замикань розробити ітератор, тобто функцію, що буде поступово
// за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього
// розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву
// користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

if (confirm('Почати тестування?')) {
  function wordIterator(word) {
    let index = 0
    function getLetter() {
      return index < word.length ? word[index++] : null
    }
    return getLetter
  }

  function game(hiddenWord, description) {
    alert(`Вгадайте слово на англійській мові  << ${description} >>`)
    let iterator = wordIterator(hiddenWord)
    let userCorrectAnswers = 0
    let hiddenWordLength = hiddenWord.length

    for (let letter = 1; letter <= hiddenWordLength; letter++) {
      let currentLetter = iterator()
      let userLetter = prompt(`Введіть літеру ${letter} з ${hiddenWordLength}`)
      if (userLetter.toLowerCase() === currentLetter.toLowerCase())
        userCorrectAnswers++
    }

    alert(
      `Гру закінчено, правильних відповідей ${userCorrectAnswers} з ${hiddenWordLength}!`
    )
  }

  let hiddenWord = 'hello'
  let description = 'Привітання'
  game(hiddenWord, description)
}
