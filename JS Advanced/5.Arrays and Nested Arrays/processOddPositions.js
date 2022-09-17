function solve(arr) {
return arr.filter((e, i) => 
        i % 2 !== 0)
        .reverse()
        .map(a => a*2);
   }



console.log(solve([10, 15, 20, 25]));
