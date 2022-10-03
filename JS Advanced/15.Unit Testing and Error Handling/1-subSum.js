function solve(arr, startIndex, endIndex) {
    let sum = 0;

    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
    for (let i = startIndex; i <= endIndex; i++) {

        if (typeof arr[i] !== 'number') {
            return NaN;
        }
       
        sum += arr[i];

    }
    return sum;

}

console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));