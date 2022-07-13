function convertToJSON(firstName, lastName, hairColor) {
    let res = {
        firstName,
        lastName,
        hairColor
    }
    let resAsString = JSON.stringify(res);
    console.log(resAsString);
}

convertToJSON('George', 'Jones', 'Brown');