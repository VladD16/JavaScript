'use strict'

// Задача 2. Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються
// танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану.

// ===================================================================================================

class Tank {
  constructor(imagesObj, cssObj, selectorContainer) {
    this.imagesObj = imagesObj
    this.cssObj = cssObj
    if (selectorContainer) this.render(selectorContainer)
  }

  setRandomPosotion() {
    this.x = Math.floor(Math.random() * 91)
  }

  setRandomInterval() {
    return Math.random() * 2000
  }

  moving() {
    this.y = parseInt(this.img.style.top) + 2
    this.img.style.top = `${this.y}%`
    if (this.y > 100) {
      let totalMis = parseFloat(document.getElementById('mis').value)
      totalMis++
      document.getElementById('mis').value = totalMis
      clearInterval(this.intervalID)
      this.img.remove()
    }
  }

  onClick() {
    this.img.setAttribute('src', this.imagesObj.boom)
    clearInterval(this.intervalID)
    let totalDes = parseFloat(document.getElementById('des').value)
    totalDes++
    document.getElementById('des').value = totalDes
    setTimeout(() => {
      this.img.remove()
    }, 3000)
  }

  render(selectorContainer) {
    const img = document.createElement('img')
    img.setAttribute('src', this.imagesObj.tank)
    img.classList.add(this.cssObj)
    this.setRandomPosotion()
    img.style.left = `${this.x}%`
    img.style.top = '-20%'
    this.img = img
    this.img.onclick = this.onClick.bind(this)
    document.querySelector(selectorContainer).append(this.img)
    // ------
    this.intervalID = setInterval(() => {
      this.moving()
    }, this.setRandomInterval())
  }
}

const images = {
  tank: './img/tank.png',
  boom: './img/boom.png',
}

window.onload = () => {
  setInterval(() => {
    const tank = new Tank(images, 'tank', '.tanks-container')
  }, 3000)
}
