function smallestTwoNumbers(arr) {
    let sortedMin = arr.sort((a, b) => {
        return a - b;
    });

    let smallestTwo = sortedMin.splice(0, 2);
    console.log(smallestTwo.join(' '));

}