function mergeArrays(firstArray, secondArray) {
    let newArray = [];
    let inputL = firstArray.length;

    for (let i = 0; i < inputL; i++) {
        if (i % 2 === 0) {
            newArray[i] = Number(firstArray[i]) + Number(secondArray[i]);
        } else {
            newArray[i] = firstArray[i] + secondArray[i];
        }
    }
    console.log(newArray.join(' - '));

}