"use strict"

let a = parseFloat(prompt("Введіть значення перемінної 'a'", "1"))
let b = parseFloat(prompt("Введіть значення  перемінної 'b'", "1"))
let c = parseFloat(prompt("Введіть значення  перемінної 'c'", "1"))

let s1 = a + 12 + b
let s2 = Math.sqrt((a + b) / (2 * a))
let s3 = Math.cbrt((a + b) * c)
let s4 = Math.sin(a / -b)

document.write(`<p> a = ${a}, b = ${b}, c = ${c} </p>`)

document.write(`<p>
                S1= ${s1} <br>
                S2= ${s2} <br>
                S3= ${s3} <br>
                S4= ${s4}
                </p>`)
