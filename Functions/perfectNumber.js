function perfectNumber(number) {

    let sumOfDivisiors = 1;

    for (let currentNumber = 2; currentNumber < number; currentNumber++) {
        if (number % currentNumber === 0) {
            sumOfDivisiors += currentNumber;
        }
    }

    if (sumOfDivisiors === number) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }

}