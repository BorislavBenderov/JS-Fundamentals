function searchForANumber(arr, numbers) {
    let numOfEl = numbers.shift();
    let deleteCount = numbers.shift();
    let searchedNum = numbers.shift();
    let newArr = [];
    let counter = 0;

    for (let i = 0; i < numOfEl; i++) {
        newArr.push(arr[i]);

        if (i <= deleteCount - 1) {
            newArr.shift()
        }

        if (arr[i] === searchedNum) {
            counter++;
        }
    }

    console.log(`Number ${searchedNum} occurs ${counter} times.`);
}