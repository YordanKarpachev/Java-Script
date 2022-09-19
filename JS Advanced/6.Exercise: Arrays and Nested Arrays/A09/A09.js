function solve(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let sumRow = arr[i].reduce((acc, current) => acc + current);
        let sumSecondRow = arr[i].reduce((acc, current) => acc + current);
        let sumCol = 0;
        let sumSecondCol = 0;

        for (let j = 0; j < arr.length; j++) {
            sumCol += arr[j][i] 
            sumSecondCol += arr[j][i+1]   
        }
        if(sumRow !== sumSecondRow || sumCol !== sumSecondCol){
            return false;
        }
    }
    return true;
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));
console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])
    );



