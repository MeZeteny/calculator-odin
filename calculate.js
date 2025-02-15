function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    let res = num1 / num2;
    if (num2 == 0) {
        return "You stupid";
    }
    if (num1 % num2 !== 0) {
        return res.toFixed(3);
    }
    return res;
}

function operate (operator, num1, num2) {

    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const screen = document.querySelector(".screen");

    //Screen children
    const text1 = document.querySelector("#first-text");
    const operator = document.querySelector("#operator");
    const text2 = document.querySelector("#second-text");

    //Number keys
    const numberKeys = document.querySelectorAll(".numbtn");

    //Function keys
    const functionKeys = document.querySelectorAll(".btn");
    const equal = document.querySelector("#equals");
    const clear = document.querySelector("#clear");

    let firstNum = 0;
    let secondNum = 0;

    text1.textContent = "";
    operator.textContent = "";

    function equalClicked() {
        result = operate(operator.textContent, Number(firstNum), Number(secondNum));
        firstNum = result;
        text1.textContent = result;
        operator.textContent = "";
        text2.textContent = "";
    }

    numberKeys.forEach(num => {
        num.addEventListener("click", () => {
            if (operator.textContent == "") {
                text1.textContent += num.textContent;
                firstNum = text1.textContent;
            } else {
                text2.textContent += num.textContent;
                secondNum  = text2.textContent;
            }            
        });
    });
    
    functionKeys.forEach(fun => {
        fun.addEventListener("click", () => {
            if (operator.textContent != "") {
                equalClicked();
                operator.textContent = fun.textContent;
            }
            else {
                operator.textContent = fun.textContent;
            }
        });
    });

    let result = 0;

    equal.addEventListener("click", () => {
        result = operate(operator.textContent, Number(firstNum), Number(secondNum));
        firstNum = result;
        text1.textContent = result;
        operator.textContent = "";
        text2.textContent = "";   
    });

    clear.addEventListener("click", () => {
        text1.textContent = "";
        operator.textContent = "";
        text2.textContent = "";
        result = 0;
        firstNum = 0;
        secondNum = 0;
    });

});

