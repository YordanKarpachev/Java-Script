class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];

    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        this.plants.push({
            plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(a => a.plantName == plantName);

        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        };

        if (currentPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        };

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        };

        currentPlant.ripe = true;
        currentPlant.quantity += quantity;

        return quantity > 1 ?  `${quantity} ${plantName}s have successfully ripened.` : `${quantity} ${plantName} has successfully ripened.` 
    }

    harvestPlant(plantName) {
        let currentPlant = this.plants.find(a => a.plantName == plantName);

        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        };

        if (!currentPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        };

        this.plants = this.plants.filter(a => a.plantName != plantName);
        this.storage.push({
            plantName: plantName,
            quantity: currentPlant.quantity

        })

        this.spaceAvailable += currentPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;

    }

    generateReport() {
        let res = [`The garden has ${this.spaceAvailable} free space left.`];
        let currentStr = "Plants in the garden: ";

        this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName))
        .forEach(c => currentStr += `${c.plantName}, `);

        currentStr = currentStr.substring(0, currentStr.length - 2);
        res.push(currentStr);
       
        if(!this.storage.length){
            res.push("Plants in storage: The storage is empty.");
        } else{
            currentStr = "Plants in storage: ";
            this.storage.forEach(c => currentStr += `${c.plantName} (${c.quantity}), `);
        }
        currentStr = currentStr.substring(0, currentStr.length - 2);
        res.push(currentStr);
        return res.join("\n")
    }
}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant("cucumber", -5));