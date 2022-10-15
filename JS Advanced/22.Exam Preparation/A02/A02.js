class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];


    }

    loadingVegetables(vegetables) {
        let res = "Successfully added ";
        let currentStr = [];
        for (let vegetable of vegetables) {

            let [type, quantity, price] = vegetable.split(" ");


            if (!this.availableProducts.find(a => a.type == type)) {
                this.availableProducts.push({
                    type,
                    quantity: Number(quantity),
                    price
                });
                currentStr.push(type)
                continue;
            }

            let current = this.availableProducts.find(a => a.type == type);
            current.quantity += Number(quantity);
            if (current.price < price) {
                current.price = price;
            }

        }
        res += currentStr.join(", ")
        return res;
    }

    buyingVegetables(selectedProducts) {

        let totalPrice = 0;
        let res = [];
        for (let product of selectedProducts) {
            let [type, quantity] = product.split(" ");
            let current = this.availableProducts.find(a => a.type == type);
            if (!current) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            if (Number(quantity) > current.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            totalPrice += Number(quantity) * current.price;
            current.quantity -= Number(quantity);

        }
        res.push(`Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`)
        return res.join("\n")
    }

    rottingVegetable(type, quantity) {
        let current = this.availableProducts.find(a => a.type == type);
        if (!current) {
            throw new Error(`${type} is not available in the store.`)
        }

        if (quantity >= current.quantity) {
            current.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }

        current.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`
    }

    revision() {
        let res = ["Available vegetables:"];
        this.availableProducts.sort((a, b) => a.price - b.price)
            .forEach(a => res.push(`${a.type}-${a.quantity}-$${a.price}`))

        res.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return res.join("\n")
    }




}



let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());