let s1 = parseFloat(prompt("Anna kolmion ensimmäisen sivun pituus: "))
let s2 = parseFloat(prompt("Anna toisen sivun pituus: "))
let s3 = parseFloat(prompt("Anna kolmannen sivun pituus: "))

let tulosTeksti = "";

if (s1 === s2 && s2 === s3) {
    tulosTeksti ="Kolmio on tasasivunen (equilateral)."
}
else if (s1 === s2 || s2 === s3 || s1 === s3){
    tulosTeksti ="Kolmion on tasakylkinen."
}
else {
    tulosTeksti ="Kolmion on epäsäännöllinen."
}

document.getElementById("Vastaus").innerHTML = `<p>Sivut: ${s1},${s2},${s3}
<h3>Tulos: ${tulosTeksti}`;