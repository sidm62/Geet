let pisteet = parseFloat(prompt("Pisteraja arvosanalle: "))

let arvosana = "";

if (isNaN(pisteet || pisteet < 0 || pisteet < 100)) {
    arvosana = "virheellinen";
}

else if (pisteet >= 88) {
    arvosana = 5;
}
else if (pisteet >= 76) {
    arvosana = 4;
}
else if (pisteet >= 64) {
    arvosana = 3;
}
else if (pisteet >= 52) {
    arvosana = 2;
}
else if (pisteet >= 40) {
    arvosana = 1;
}
else {
    arvosana = 0;
}
    document.getElementById("pisteet").innerHTML =`<h2> ArvosanaLaskuri</h2>
<p>Pisteet ${pisteet}</p>
<p>Arvosana: <strong> ${arvosana}</strong></p>`;

