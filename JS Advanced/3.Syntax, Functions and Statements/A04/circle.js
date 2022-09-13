function solve(input) {
    let type = typeof (input);

    if (type !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
        return;
    }

    let output = input * input * Math.PI;
    console.log(output.toFixed(2));
}

solve(5);