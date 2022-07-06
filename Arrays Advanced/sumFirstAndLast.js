function sumFirstAndLast(arr) {
    let firstElement = arr.shift();
    let lastElement = arr.pop();

    console.log(Number(firstElement) + Number(lastElement));
}