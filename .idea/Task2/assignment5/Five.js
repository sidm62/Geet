let number = parseFloat(prompt("Anna numero: "))

let summa = 0;

if (isNaN(number)) {
    document.getElementById("vastaus").innerHTML = "<p>Virheellinen syöte</p>";
}
else {



for (let i = 0; i < number; i++) {
    summa += i;

}

    document.getElementById("vastaus").innerHTML = `
    <p>Syötit luvun <strong>${number}</strong></p>
    <p>Vastaus on: <strong>${summa}</strong></p>
`;
}

