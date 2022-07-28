function sorting(arr) {
    let newArr = [];
    let sortedArr = arr.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < sortedArr.length; i++) {
        let min = sortedArr.shift();
        let max = sortedArr.pop();
        newArr.push(max, min);



    }
    newArr.push(sortedArr[1], sortedArr[0]);
    console.log(newArr.join(' '));



}