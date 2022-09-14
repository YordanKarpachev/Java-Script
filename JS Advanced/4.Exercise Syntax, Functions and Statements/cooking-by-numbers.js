function solve(number, ...commands) {

    commands.forEach(a => {
        number = mutator(number, a);
    })

    function mutator(inputNumber, com) {
        switch (com) {
            case "chop":
                inputNumber /= 2;
                break;
            case "dice":
                inputNumber = Math.sqrt(inputNumber);
                break;
            case "spice":
                inputNumber++;
                break;
            case "bake":
                inputNumber *= 3;
                break;
            case "fillet":
                inputNumber *= 0.8;
                break;
            }
            console.log(inputNumber);
            return inputNumber;
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');