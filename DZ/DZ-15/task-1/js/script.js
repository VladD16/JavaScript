'use strict'

// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є
// заєць і 0 в іншому випадку.

// === Тир ===
// Поля(властивості):
// Масив, у якому зберігається поле з зайцями
// ===============================================
// Методи (дії):
// Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля
//====================================================

if (confirm('Почати тестування?')) {
  const shootingGallery = {
    field: [1, 1, 0, 0, 0, 1],

    shot: function (position) {
      this.field[position] === 1
        ? alert('Влучив в зайця!')
        : alert('Тут зайця немає!')
    },

    getField: function () {
      document.write(`<p>
            ${this.field.join(` | `)}
            </p>`)
    },
  }

  //   shootingGallery.shot(1)
  //   shootingGallery.getField()
}
