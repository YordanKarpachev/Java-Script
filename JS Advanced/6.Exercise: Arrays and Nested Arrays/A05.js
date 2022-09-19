function solve(arr) {

    let res = [];
    let big = arr[0];

    res = arr.reduce((akk, currentValue) => {
        if (currentValue >= big) {
            akk.push(currentValue);
            big = currentValue

        }
        return akk;
    }, []);
    return res;}

    solve([1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24])