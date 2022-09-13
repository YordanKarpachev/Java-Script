function solve(num, num2, operator) {
    //    '%', '**'
    switch (operator) {
        case '+':
            console.log(num + num2);
            break;
        case '-':
            console.log(num - num2);
            break;
        case '*':
            console.log(num * num2);
            break;
        case '/':
            console.log(num / num2);
            break;
        case '%':
            console.log(num % num2);
            break;
            case '**':
                console.log(num ** num2);
                break;

    }

}

solve(3, 5.5, '*');