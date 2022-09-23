function solve(input) {

    let res = [];

    while (input.length !== 0) {

        let [town, productName, price] = input.shift().split(' | ');

        if (res.filter(x => x.productName === productName).length > 0) {
            let obj = res.find(x => x.productName === productName);

            if (obj.price > price) {
                obj.price = price;
                obj.town = town;
            }

        } else {
            let obj = { town, productName, price: Number(price) };
            res.push(obj)
        }

    }

    res.forEach(x => { console.log(`${x.productName} -> ${x.price} (${x.town})`) })
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
