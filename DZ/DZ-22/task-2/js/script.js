'use strict'

// Задача 2. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage).
// Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm).
// Якщо користувач натискає на «Ок», то видаляти цю задачу.

//====================================================

const toDoList = [
  'Buy groceries: Milk, eggs, bread, and vegetables',
  'Clean the house: Vacuum the living room and mop the kitchen floor',
  'Complete programming homework: Finish the JavaScript project',
  'Exercise: Go for a 30-minute run',
  'Read a book: Continue reading the latest novel',
  'Pay bills: Electricity and water',
  'Cook dinner: Try a new recipe for pasta',
  'Call family: Check in with parents and siblings',
  'Water the plants: Make sure they get enough water',
  'Organize workspace: Clean and declutter your desk',
]

class ToDoList {
  constructor(tasksArray) {
    this.localList = tasksArray
  }

  addTasksToLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(this.localList))
  }

  getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  getRandomTast() {
    this.localList = JSON.parse(localStorage.getItem('toDoList'))
    this.randomTaskNumber = this.getRandomNumber(0, this.localList.length - 1)
    const randomTask = this.localList[this.randomTaskNumber]
    return randomTask
  }

  showTask() {
    const randomTask = this.getRandomTast()
    const userConfirmed = confirm(randomTask)
    if (userConfirmed) {
      const indexToRemove = this.randomTaskNumber
      this.localList.splice(indexToRemove, 1)
      this.render()
    } else if (!userConfirmed) {
      this.render()
    }
  }

  render() {
    this.addTasksToLocalStorage()
    if (this.localList.length > 0) {
      setTimeout(() => {
        this.showTask()
      }, 2000)
    }
  }
}

const myToDoList = new ToDoList(toDoList)
myToDoList.render()
