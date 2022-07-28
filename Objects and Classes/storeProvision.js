function storeProvision(currentStocks, forDelivery) {
    let storedProducts = {};

    for (let i = 0; i < currentStocks.length; i += 2) {
        let product = currentStocks[i];
        storedProducts[product] = Number(currentStocks[i + 1]);
    }

    for (let i = 0; i < forDelivery.length; i += 2) {
        let product = forDelivery[i];
        if (!storedProducts.hasOwnProperty(product)) {
            storedProducts[product] = 0;
        }
        storedProducts[product] += Number(forDelivery[i + 1])
    }

    for (let product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);
    }
}