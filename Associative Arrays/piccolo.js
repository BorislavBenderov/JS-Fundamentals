function piccolo(data) {
    let parking = new Set();

    for (let line of data) {
        let [command, carNumber] = line.split(', ');
        switch (command) {
            case 'IN':
                parking.add(carNumber);
                break;
            case 'OUT':
                parking.delete(carNumber);
                break;
        }
    }

    if (parking.size === 0) {
        return console.log("Parking Lot is Empty");
    }

    let sortParking = Array.from(parking.values()).sort();

    console.log(sortParking.join('\n'));
}