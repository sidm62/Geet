function sortArray() {

const numbers = []



    for (let i = 0; i < 5; i++) {
        let syote = parseFloat(prompt("Enter a number: "));

        if(!isNaN(syote)) {
            numbers.push(syote)
        } else {
            alert("Enter a valid number: ");
            i--;
        }
    }

    const asc = [...numbers].sort((a, b) => a - b);
    const desc = [...numbers].sort((a, b) => b - a);

    console.log("Ascending:", asc);
    console.log("Descending:", desc);
}
sortArray();