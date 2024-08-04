'use strict'

let tableDateNumber = 1

for (let tablenum = 1; tablenum <= 3; tablenum++) {
  document.write(`<table>`)
  for (let tableRow = 1; tableRow <= 3; tableRow++) {
    document.write(`<tr>`)
    for (let i = 1; i <= 3; i++) {
      document.write(`<td>${tableDateNumber}</td>`)
      tableDateNumber++
    }
    document.write(`</tr>`)
  }
  document.write(`</table>`)
}
