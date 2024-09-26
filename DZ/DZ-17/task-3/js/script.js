'use strict'

// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма
// нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже
// нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів.
// Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

//====================================================

if (confirm('Почати тестування?')) {
  class Reminder {
    static reminder

    constructor(interval, message) {
      if (Reminder.reminder) return Reminder.reminder

      this.interval = interval
      this.message = message
      this.counter = 1
      this.timer = null

      Reminder.reminder = this
    }

    getMessage() {
      console.log(`${this.message} - ${this.counter}`)
      this.counter++
    }

    startInterval() {
      if (this.timer) return
      this.timer = setInterval(() => this.getMessage(), this.interval * 1000)
    }

    stopInterval() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    }

    changeMessage(newMessage) {
      return (this.message = newMessage)
    }
  }

  const reminder1 = new Reminder(2, `Hi, world!`)
  const reminder2 = new Reminder(4, `Hi!`)
  reminder1.startInterval()
  reminder2.startInterval()

  setTimeout(() => reminder1.changeMessage(`Hi, Vlad!`), 6000)
  setTimeout(() => reminder1.stopInterval(), 12000)
}
