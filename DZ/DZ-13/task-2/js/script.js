'use strict'

// Задача 2.  Дано масив імен спортсменів. Розробити програму для виведення усіх можливих
// результатів змагань (списки імен у відповідності до місць, які вони займуть).

if (confirm('Почати тестування?')) {
  let list = ['Jack', 'Max', 'Vlad', 'Bogdan', 'Olga']
  function generate(list, res) {
    if (list.length === 0) console.log(res)
    else {
      for (const sportsman of list) {
        generate(
          list.filter((el) => el !== sportsman),
          [...res, sportsman]
        )
      }
    }
  }
  generate(list, [])
}
