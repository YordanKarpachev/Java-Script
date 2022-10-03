function calculator() {
    let sel;
    let sel2;
    let resSel;
    return {
        init: (selector1, selector2, resultSelector) => {
            sel = document.querySelector(selector1);
            sel2 = document.querySelector(selector2);
            resSel = document.querySelector(resultSelector);

        },
        add: () => {
            resSel.value = Number(sel.value) + Number(sel2.value);
         },
        subtract: () => {
            resSel.value = Number(sel.value) - Number(sel2.value);
         }
    }
}


const calculate = calculator();
calculate.init('#num1', '#num2', '#result');

