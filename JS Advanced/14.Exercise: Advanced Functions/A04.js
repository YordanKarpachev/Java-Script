function solution() {

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recept = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }

    }


    return function inner(input) {
        let [command, product, quantity] = input.split(" ");
        let operator = cmd();
        return operator[command](product, quantity);
    }

    function cmd() {
        return {

            restock: (microelement, quantity) => {
                store[microelement] += Number(quantity);
                return 'Success'
            },
            prepare: (receptInput, quantity) => {
                let current = recept[receptInput];

                let can = true;
                let currentStore = JSON.parse(JSON.stringify(store));

                for (let [k, v] of Object.entries(current)) {
                    if (store[k] < v * quantity) {
                        can = false;
                        store = currentStore;
                        return `Error: not enough ${k} in stock`
                    }
                     store[k] -= v * quantity

                }
                if (can) {
                    return "Success"
                }


            },

            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
            }
        }
    }
}



let manager = solution();
console.log(manager("restock flavour 50"));// Success
console.log(manager("prepare lemonade 4"));// Error: not enough carbohydrate in stock

console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"))

console.log(manager("prepare apple 1"))

console.log(manager("restock fat 10"))

console.log(manager("prepare burger 1"))

console.log(manager("report"))

