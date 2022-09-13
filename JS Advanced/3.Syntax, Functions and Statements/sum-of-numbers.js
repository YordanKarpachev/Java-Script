function solve(num, num2) {

    sum = 0;
    for (let i = Number(num); i <= Number(num2); i++) {
        sum += i;
    }
    console.log(sum);
}

solve('-8', '20');