function cats(arr) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let [name, age] = arr[i].split(' ');
        let myCat = new Cat(name, age);
        cats.push(myCat);
    }

    for (let myCat of cats) {
        myCat.meow();
    }
}