function charactersInRange(firstChar, secondChar) {
    let starChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    let charsInRangeArray = [];

    for (let current = starChar + 1; current < endChar; current++) {
        let currentChar = String.fromCharCode(current);
        charsInRangeArray.push(currentChar);
    }

    console.log(charsInRangeArray.join(' '));
}