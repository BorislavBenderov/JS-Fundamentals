function sumDigits(num) {
    let numberAsString = num.toString();
    let sumOfAllDigits = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let currentDigit = Number(numberAsString[i]);
        sumOfAllDigits += currentDigit;
    }
    console.log(sumOfAllDigits);

}