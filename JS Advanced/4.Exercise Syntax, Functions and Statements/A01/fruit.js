function solve(type, gram, price){
console.log(`I need $${(gram / 1000 * price).toFixed(2)} to buy ${(gram / 1000).toFixed(2)} kilograms ${type}.`);

}

solve('orange', 2500, 1.80);