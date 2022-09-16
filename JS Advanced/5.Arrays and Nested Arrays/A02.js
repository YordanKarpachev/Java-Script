function solve(n, k) {

    let arr = [1];

    for (let i = 1; i < n; i++) {

        let sum = 0;
        for (let j = i - k; j < i; j++) {
            if (j < 1) {
                j = 0;
            }
            sum += arr[j];
        }
      
        arr.push(sum)

    }

    return arr;
}

console.log(solve(6, 3));
