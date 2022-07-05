function numberModification(num) {
    let sum = 0;
    let str = String(num);

    for (let i = 0; i < str.length; i++) {
        let nums = Number(str[i]);
        sum += nums;
    }

    for (let k = 0; k < str.length; k++) {
        if (sum / str.length < 5) {
            sum += 9;
            str += 9;
        } else {
            break;
        }
    }

    console.log(str);

}