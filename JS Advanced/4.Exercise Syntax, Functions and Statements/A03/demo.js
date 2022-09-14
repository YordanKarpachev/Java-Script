function solve(num) {
    let n = num % 10;
    let sum = 0;
    let output = true;

    while (num > 0) {
        let current = num % 10;

        if (current != n) {
            output = false;
        }
        sum += current;
       num = Math.floor (num /= 10);

    }
    console.log(output);
    console.log(sum);

}

solve(2222222);
solve(1234);