function commonElements(firstArray, secondArray) {
    for (let el of firstArray) {
        if (secondArray.includes(el)) {
            console.log(el);
        }
    }
}