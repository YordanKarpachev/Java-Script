function solve(arr) {

    let biggestElement = Number.MIN_SAFE_INTEGER;
    arr.forEach(element => {
        element.forEach(e => {
            biggestElement = Math.max(biggestElement, e);
        })
    });

    console.log(biggestElement);
}

solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);
