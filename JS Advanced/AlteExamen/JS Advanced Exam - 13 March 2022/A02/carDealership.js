class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || model.trim() == "" || horsepower < 0 || price < 0 || mileage < 0 || !Number.isInteger(horsepower)) {
            throw new Error("Invalid input!");
        }

        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }


    sellCar(model, desiredMileage) {
        let currentCar = this.availableCars.find(a => a.model == model);

        if (!currentCar) {
            throw new Error(`${model} was not found!`);
        }

        let currentSoldPrice = 0;
        if (desiredMileage >= currentCar.mileage) {
            currentSoldPrice = currentCar.price;
        } else if (desiredMileage >= currentCar.mileage + 40000) {
            currentSoldPrice = currentCar.price * 0.95;
        } else {
            currentSoldPrice = currentCar.price * 0.90;
        }

        this.availableCars = this.availableCars.filter(a => a.model !== model);

        this.soldCars.push({
            model,
            horsepower: currentCar.horsepower,
            soldPrice: currentSoldPrice
        });

        this.totalIncome += currentSoldPrice;
        return `${model} was sold for ${currentSoldPrice.toFixed(2)}$`;
    }

    currentCar() {
        let res = [];

        if (this.availableCars.length == 0) {
            return "There are no available cars";
        }

        res.push("-Available cars:")

        this.availableCars.forEach(a => res.push(`---${a.model} - ${a.horsepower} HP - ${a.mileage.toFixed(2)} km - ${a.price.toFixed(2)}$`));
        return res.join("\n");

    }


    salesReport(criteria) {
        if (criteria != "horsepower" && criteria != "model") {
            throw new Error("Invalid criteria!");
        }

        let res = [];
        res.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        res.push(`-${this.soldCars.length} cars sold:`)

        if (criteria == "model") {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
                .forEach(a => res.push(`---${a.model} - ${a.horsepower} HP - ${a.soldPrice.toFixed(2)}$`))
        } else {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
                .forEach(a => res.push(`---${a.model} - ${a.horsepower} HP - ${a.soldPrice.toFixed(2)}$`))
        }

        return res.join("\n")
    }


}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100.1, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
