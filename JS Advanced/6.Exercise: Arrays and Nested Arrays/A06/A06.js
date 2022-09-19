function solve(arr) {
    let count = 1;
    arr.sort((a, b) => a.localeCompare(b)).forEach(element => {
        console.log(`${count++}.${element}`);
    });
}

solve(["John", "Bob", "Christina", "Ema"])