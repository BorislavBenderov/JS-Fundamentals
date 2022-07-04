function main(first, second, third) {

    let sumFirstAndSecond = sum(first, second);

    console.log(subtract(sumFirstAndSecond, third));

    function sum(first, second) {
        return first + second;
    }

    function subtract(firstResult, third) {
        return sumFirstAndSecond - third;
    }

}