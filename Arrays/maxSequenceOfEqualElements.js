function maxSequenceOfEqualElements(array) {

    let maxSequnce = [];

    for (let i = 0; i < array.length; i++) {
        let currentSequence = [];

        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                currentSequence.push(array[i]);
            } else {
                break;
            }
        }

        if (currentSequence.length > maxSequnce.length) {
            maxSequnce = currentSequence;
        }
    }

    console.log(maxSequnce);
}