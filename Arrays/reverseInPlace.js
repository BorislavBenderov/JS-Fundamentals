function reverseInPlace(arr) {
    let k = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[k - i];
        arr[k] = temp;
    }
    console.log(arr);
}