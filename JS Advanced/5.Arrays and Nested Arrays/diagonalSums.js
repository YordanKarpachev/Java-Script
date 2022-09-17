function solve(arr) {

    let sum = 0;
    let sum2 = 0;

    for (let i = 0; i < arr[0].length; i++) {

        sum += arr[i][i];
        sum2 +=arr[arr[0].length -1 - i][i];

    }
    console.log(sum + ' ' + sum2);
}

solve([[20, 40],
       [10, 60]]);

solve([[3, 5, 17],
       [-1, 7, 14],
       [1, -8, 89]]);