function solve(input) {

    for (let i = 0; i < input; i++) {
      let output = '';
        for (let i = 0; i < input; i++) {
            output += '* ';
        }
        console.log(output.trim());

    }

}

solve(5);