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
    const text = document.querySelector(".screen");

    //Number keys
    const numberKeys = document.querySelectorAll(".numbtn");

    //Function keys


    text.textContent = "";

    numberKeys.forEach(num => {
        num.addEventListener("click", () => {
            text.textContent += num.textContent; 
        });
    });
    
});

