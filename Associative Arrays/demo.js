function demo(input) {
    let heroes = [];

    for (let i of input) {
        let [name, age, items] = i.split(' / ');
        let obj = {
            name,
            age,
            items
        }
        heroes.push(obj);
    }
    
    let sorted = heroes.sort((a,b) => {
        return a.age - b.age
    });

    for (let i of sorted) {
        console.log(i.name);
        console.log(i.age);
        console.log(i.items);
    }
}

demo([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]);