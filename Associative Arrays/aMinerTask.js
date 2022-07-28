function aMinerTask(arr) {
    let result = new Map();

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);
        if (result.has(resource)) {
            let oldQuantity = result.get(resource);
            result.set(resource, oldQuantity + quantity);
        } else {
            result.set(resource, quantity);
        }
    }

    for (let [key, value] of result.entries()) {
        console.log(`${key} -> ${value}`);
    }
}