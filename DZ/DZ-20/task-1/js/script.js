'use strict'

// Задача 1. Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану.
// Кожна зірка (це екземпляр класу Star) з певним кроком і інтервалом збільшується від мінімального
// до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у
// іншій випадковій позиції.

// =============================================================================================

class Star {
  constructor(minWidth, maxWidth, cssObj, containerSelector) {
    this.minWidth = minWidth
    this.maxWidth = maxWidth
    this.cssObj = cssObj
    if (containerSelector) this.render(containerSelector)
  }

  setPosition() {
    this.left = Math.random() * 100
    this.top = Math.random() * 100
  }

  setRandomStep() {
    return 1 + Math.random()
  }

  setRandomInterval() {
    return (1 + Math.random()) * 1000
  }

  move() {
    this.setPosition()
    this.star.style.left = `${this.left}%`
    this.star.style.right = `${this.right}%`
  }

  growing() {
    this.width = parseInt(this.star.style.width) + this.setRandomStep()
    if (this.width > this.maxWidth) {
      this.star.style.width = `${this.minWidth}px`
      this.move()
    } else this.star.style.width = `${this.width}px`
  }

  render(containerSelector) {
    const starEl = document.createElement('div')
    // ------
    starEl.classList.add(this.cssObj)
    starEl.style.width = `${this.minWidth}px`
    this.setPosition()
    starEl.style.left = `${this.left}%`
    starEl.style.top = `${this.top}%`
    // ------
    this.star = starEl
    document.body.append(starEl)

    setInterval(() => {
      this.growing()
    }, this.setRandomInterval())
  }
}

window.onload = () => {
  for (let i = 0; i < 50; i++) {
    const star = new Star(2, 12, 'star', '.stars')
  }
}
