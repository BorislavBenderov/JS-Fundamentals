function phoneBook(data) {
    let phoneBooks = {};

    for (let line of data) {
        let [name, phoneNumber] = line.split(' ');
        phoneBooks[name] = phoneNumber;
    }

    for (let key in phoneBooks) {
        console.log(`${key} -> ${phoneBooks[key]}`);
    }
}