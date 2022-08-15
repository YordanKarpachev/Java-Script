function demo(input) {

    let inputNumber = input.toString();
    let istSame = true;
    let sum = 0;
    let digitToCompare = inputNumber[0];
    const numberL =  inputNumber.length;

    for(let i = 0; i < numberL ; i++){

        sum +=  +inputNumber[i];
        if(digitToCompare !== inputNumber[i]){
            istSame = false;
        }
    }
    console.log(istSame);
    console.log(sum);



}
demo(2222222);