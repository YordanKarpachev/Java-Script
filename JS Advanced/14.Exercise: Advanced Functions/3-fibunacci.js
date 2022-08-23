function getFibonator(){

    let[a, b] = [0,1];

    return() => {
        let c = a + b;
        a = b;
        b = c;
        console.log(c);
        return a;
    }


}


let fib = getFibonator();
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib());
console.log(fib());