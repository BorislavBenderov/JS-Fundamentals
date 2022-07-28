function factorialDivision(num, n) {
    let sum = 1;

    for (let i = 1; i <= num; i++) {
        sum *= i;
    }

    console.log(sum / n);
    
}
