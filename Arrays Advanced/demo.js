function demo(arr) {
    arr.sort((a, b) => a.length - b.length);
    console.log(arr);
}

demo(['alpha', 'beta', 'gamma']);