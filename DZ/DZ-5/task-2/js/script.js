'use strict'

let userChoice = parseInt(prompt(`Введіть кількість абзаців:`))

for (let titleNumber = 1; titleNumber <= userChoice; titleNumber++) {
  document.write(`<h2>Заголовок № ${titleNumber}</h2>`)
  for (
    let paragraphNumber = 1;
    paragraphNumber <= titleNumber;
    paragraphNumber++
  ) {
    document.write(`<p>Розділ ${titleNumber}, параграф ${paragraphNumber}</p>`)
  }
}
