function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let firstNumAsNumber = Number(firstNumber);

    let secondNumber = document.getElementById('secondNumber').value;
    let secondNumAsNumber = Number(secondNumber);

    let result = firstNumAsNumber - secondNumAsNumber;
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
    console.log(result);



}