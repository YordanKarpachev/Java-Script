function solve(arr) {
    arr.sort((a, b) => a - b);
  let second = arr.slice(arr.length / 2);
return second;

}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);