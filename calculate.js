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
    return num1 / num2;
}

function operate (operator, num1, num2) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;

        case "-":
            subtract(num1, num2);
            break;

        case "*":
            multiply(num1, num2);
            break;

        case "/":
            divide(num1, num2);
            break;
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
            operator.textContent = fun.textContent;
        });
    });

    equal.addEventListener("click", () => {
        
    });

    clear.addEventListener("click", () => {
        text1.textContent = "";
        operator.textContent = "";
        text2.textContent = "";
    });

});

