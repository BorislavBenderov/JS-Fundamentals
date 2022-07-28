function numbers(sequence) {
    let arrOfStrings = sequence.split(' ');

    let arrOfNumber = [];
    let sum = 0;
    for (let el of arrOfStrings) {
        let currentNumber = Number(el);
        arrOfNumber.push(currentNumber);
        sum += currentNumber;
    }

    let avg = sum / arrOfNumber.length;

    let greaterThanTheAverage = [];
    for (let el of arrOfNumber) {
        if (el > avg) {
            greaterThanTheAverage.push(el);
        }
    }

    greaterThanTheAverage = greaterThanTheAverage.sort((a, b) => b - a);
    for (let i = 0; i < 5 && greaterThanTheAverage.length; i++) {
        console.log(greaterThanTheAverage[i]);
    }
}