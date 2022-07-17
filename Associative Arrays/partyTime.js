function partyTime(data) {
    let vip = [];
    let normal = [];

    let isParty = false;

    for (let line of data) {
        if (line === 'PARTY') {
            isParty = true;
            continue;
        }

        let firstCh = Number(line[0]);

        if (!isParty) {

            if (isNaN(firstCh)) {
                normal.push(line);
            } else {
                vip.push(line);
            }
        } else {
            if (isNaN(firstCh)) {
                let index = normal.indexOf(line);
                normal.splice(index, 1);
            } else {
                let index = vip.indexOf(line);
                vip.splice(index, 1);
            }

        }
    }

    let size = vip.length + normal.length;
    console.log(size);

    for (let code of vip) {
        console.log(code);
    }

    for (let code of normal) {
        console.log(code);
    }
}