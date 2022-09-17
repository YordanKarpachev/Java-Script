function solve(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length ; i++) {

        for (let j = 0; j < arr[i].length ; j++) {

            if ((i !== arr.length - 1 ) && (arr[i][j] === arr[i + 1][j])) {
                sum++;
            }
            if(arr[i][j] === arr[i][j +1]){
                sum++;
            }

        }

    }
    console.log(sum);

}

solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);
