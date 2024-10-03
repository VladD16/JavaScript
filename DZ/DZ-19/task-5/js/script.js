'use strict'

// Задача 5. Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену
// рамку (при кліку робити toogle з класом вибраного елемента)

//====================================================

const clickActions = (e) => {
  const currentEl = e.target
  // --------------------------------

  if (currentEl.closest('.item-products')) {
    let productItem = currentEl.closest('.item-products')
    productItem.classList.toggle('selected')
  }
}

document.addEventListener('click', clickActions)
