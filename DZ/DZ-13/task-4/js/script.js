'use strict'

// Задача 4. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців
// і дівчат.

if (confirm('Почати тестування?')) {
  const boysList = ['Vlad', 'John', 'Jack', 'Max']
  const girlsList = ['Olga', 'Julia', 'Maria', 'Nastya']

  function getPairs(boys, girls) {
    const pairs = []
    for (const boy of boys) {
      for (const girl of girls) {
        pairs.push(`${boy} and ${girl}`)
      }
    }
    return pairs
  }

  const pairsForDancing = getPairs(boysList, girlsList)
  console.log('=== Pairs for dancing ===')
  pairsForDancing.forEach((pair) => console.log(pair))
}
