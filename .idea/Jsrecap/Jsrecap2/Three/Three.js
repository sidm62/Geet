const numbers = [];

while (true) {
    let syote = prompt("Enter number or done to finish: ");

    if (syote === null || syote.toLowerCase() === "done") {
        break;
    }

    let luku = parseFloat(syote);

    if (!isNaN(luku)) {
        numbers.push(luku);
    } else {
        document.write("<p>Please enter a valid number</p>")
    }

}
let evenNumber = [];

for (let number of numbers){
     if (number % 2 == 0) {
         evenNumber.push(number);
     }
}



document.write("<p>Kaikki luvut " + numbers + "</p>");
document.write("<p> Even numbers: [" + evenNumber.join(",") + "]</p> ")