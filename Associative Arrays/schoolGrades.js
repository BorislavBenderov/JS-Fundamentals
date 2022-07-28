function schoolGrades(data) {
    let result = new Map();

    for (let line of data) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let setOfGrade = tokens;

        if (!result.has(name)) {
            result.set(name, setOfGrade);
        } else {
            let oldSet = result.get(name);
            for (let grade of setOfGrade) {
                oldSet.push(grade);
            }
            result.set(name, oldSet);
        }
    }

    let sortEntries = Array.from(result.entries()).sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB);
    });

    for (let [k, v] of sortEntries) {
        let sumGrade = 0;

        for (grade of v) {
            sumGrade += Number(grade);
        }
        let avg = sumGrade / v.length;
        console.log(`${k}: ${avg.toFixed(2)}`);
    }
}