function solve(arr, steps){
   return arr.filter((el, index) => {
        return index % steps === 0;
    });
    }
    
    solve(['1', 
    '2', 
    '3', 
    '4', 
    '5', '6'], 
    2)