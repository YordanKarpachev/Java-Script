function solve(a, b){
    let current = 1;
   
    for(let i = 1; i <= b; i++){
       
        if (a % i == 0 && b % i == 0){
            current = i;
        }
    }
    console.log(current);
    
    }
    
    solve(2154, 458);
    solve(15, 5);