let x1 = parseFloat(prompt("Anna ensimmäisen pisteen x1: "))
let x2 = parseFloat(prompt("Anna toisen pisteen x2: "))
let y1 = parseFloat(prompt("Anna ensimmäisen pisteen y1: "))
let y2 = parseFloat(prompt("Anna toisen pisteen y2: "))

let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
let answer = document.getElementById("answer");

answer.innerHTML = `<p> Piste 1: ${distance} </p>
<p> Piste 2: ${distance} </p>
<hr>
<p class ="answer">Pisteiden välinen etäisyys on : <strong>${distance.toFixed(2)}</strong></p>`;