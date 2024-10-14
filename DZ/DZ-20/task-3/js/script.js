'use strict'

// Задача 3. Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі,
// які містять вказаний фрагмент

// ======================================================================================

function search() {
  const searchName = document.getElementById('input-1').value.toLowerCase()
  const names = document.querySelectorAll('.list__item')
  names.forEach((name) => {
    name.style.display = 'block'
    if (!name.innerText.toLowerCase().includes(searchName))
      name.style.display = 'none'
  })
}

window.onload = () => {
  document.getElementById('input-1').oninput = search
}
