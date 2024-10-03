'use strict'

// Задача 6. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у
// змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто
// був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При
// натисканні на червону стрілку спортсмен переміщається у загальний список.

//====================================================

const clickActions = (e) => {
  const currentEl = e.target
  // -------------------------------------
  if (currentEl.classList.contains('column-left__item')) {
    const clone = currentEl.cloneNode(true)
    clone.classList.replace('column-left__item', 'column-right__item')
    const rightList = document.querySelector('.column-right__list')
    rightList.append(clone)
    currentEl.remove()
  }
  if (currentEl.classList.contains('column-right__item')) {
    const clone = currentEl.cloneNode(true)
    clone.classList.replace('column-right__item', 'column-left__item')
    const leftList = document.querySelector('.column-left__list')
    leftList.append(clone)
    currentEl.remove()
  }
  // -------------------------------------
}

document.addEventListener('click', clickActions)
