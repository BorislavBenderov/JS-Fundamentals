function flightSchedule(arr) {
    let obj = {};
    let firstArr = arr.shift();
    let secondArr = arr.shift();
    let thirdArr = arr.shift();

    for (let i = 0; i < firstArr.length; i++) {
        let [num, name] = firstArr[i].split(' ');
        obj[num] = {
            Destination: name,
            Status: 'Ready to fly'
        }
    }

    for (let i = 0; i < secondArr.length; i++) {
        let [num1, status] = secondArr[i].split(' ');
        if (obj.hasOwnProperty(num1)) {
            obj[num1].Status = status;
        }

    }

    for (let fly in obj) {
        if (obj[fly].Status === String(thirdArr)) {
            console.log(obj[fly]);
        }
    }

}