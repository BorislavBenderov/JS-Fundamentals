function magicSum(array, num) {
    let arrOfValidPairs = [];
    let validPair = '';

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === num) {
                validPair = `${array[i]} ${array[j]}`;
                arrOfValidPairs.push(validPair);
            }
        }
    }
    console.log(arrOfValidPairs.join('\n'));
}