function censoredWords(text, word) {
    let newText = text.split(word);
    let res = newText.join('*'.repeat(word.length));
    console.log(res);
}