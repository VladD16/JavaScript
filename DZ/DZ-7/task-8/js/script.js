'use strict'

// Створити функцію, яка виводить банер (у функцію передаються: зображення,
// заголовок та посилання, куди переходимо при кліку на зображення
// (тег img повине знаходитись у середині тега a:
// <a> <img src=”шлях”> </a>

function getBanner(title, src, link) {
  document.write(`<h2>${title}</h2><br>
        <a target="_blank" href="${link}"><img src="${src}" alt="image"></a>`)
}

getBanner('Шалений розпродаж', 'img/banner.jpg', 'https://www.google.com/')
