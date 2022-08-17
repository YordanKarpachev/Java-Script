function arraysDemo(array){
    let sorted = array.sort((a ,b) => a.localeCompare(b));

    let orderNumber = 1;

    sorted.forEach((name) => {
        console.log(`${orderNumber}.${name}`);
        orderNumber++
    }); 


}

arraysDemo(["John", "Bob", "Christina", "Ema"]);