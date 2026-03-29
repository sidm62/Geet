const numbers = [];


for (let i = 0; i < 5; i++) {
    let syote = parseFloat(prompt("Enter your number: "));

    if (!isNaN(syote)) {
        numbers.push(syote)
    }
}

document.write("All numbers + ["+ numbers + "] ");

let search = parseInt(prompt("Enter a number to search: "));
document.write("<p>Enter number to search: " + search + "</p>");
if (numbers.includes(search)) {
    document.write("<p>Number "+ search +" is found in the array</p>");



}

numbers.pop();
document.write("<p> Updated Numbers: [" + numbers.join(",")+"]</p>")

numbers.sort((a,b)=> a-b);
document.write("<p>Sorted Numbers: [" + numbers.join(", ") + "]</p>");

