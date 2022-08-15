function fruit(fruitName, weightInGram, pricePerKg){
let kilograms = weightInGram / 1000;
let price = kilograms * pricePerKg;
console.log(`I need $${price} to buy ${kilograms.toFixed^(2)} kolograms ${fruitName} `)

}

fruit('orange', 2500, 1.80)