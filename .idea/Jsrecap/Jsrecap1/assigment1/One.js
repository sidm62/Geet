

let syote = prompt("Anna lämpotila Celsiuksena: ");
let celsius = parseFloat(syote);

let fahrenheit = (celsius * 9/5) +32;

let kelvin = celsius - 273.15;

document.body.innerHTML = `<p>Annoit lämpötilan: <strong>${celsius} °C</strong></p>
<ul>
    <li>Fahrenheit: <strong>${fahrenheit.toFixed(2)} °F</strong></li>
    <li>Kelvin: <strong>${kelvin.toFixed(2)} K</strong></li>
</ul>`;