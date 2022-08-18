function solve(input) {
    let obj = {};
   
    for (index = 0; index < input.length; index += 2){
        let productName = input[index];
        let calories = input[index + 1];
        obj[productName] = Number(calories);

    }
    console.log(obj);

}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])