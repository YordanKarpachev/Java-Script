function solve(input) {
    let result = [];

    while (input.length !== 0) {
        let [productName, price] = input.shift().split(' : ');

        let char = productName.charAt(0);
  
        let currentString = productName + ': ' + price;

        if (result.filter(x => x.char === char).length > 0) {
            let current = result.find(x => x.char === char);

            current.data.push(currentString);
        } else {
            let obj = { char, data: [] };
            obj.data.push(currentString);
            result.push(obj)

        }

    }

    result.sort((a, b) => a.char.localeCompare(b.char))
    .forEach(a => {
        console.log(a.char);
        let obj = a.data;
       //  console.log(obj.join('\n'));
        obj.sort((a,b) => a.localeCompare(b))
        .forEach(b => { console.log('  ' + b ) })

    })


}




solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

console.log('************');

solve(['Banana : 2',
    'Rubics Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);