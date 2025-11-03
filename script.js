function operate(num1, num2, operator){
    if (operator==='+') return add(num1, num2);
    if (operator==='-') return subtract(num1, num2);
    if (operator==='*') return multiply(num1, num2);
    if (operator==='/') return divide(num1, num2);
}

function add(num1, num2){
    let result = (+num1)+(+num2);
    return Math.round(result * 100) / 100;
}

function subtract(num1, num2){
    let result = (+num1)-(+num2);
    return Math.round(result * 100) / 100;
}

function multiply(num1, num2){
    let result = (+num1)*(+num2);
    return Math.round(result * 100) / 100;
}

function divide(num1, num2){
    if ((+num2)===0){
        return 'Number 2 cannot be 0';
    }
    let result = (+num1)/(+num2);
    return Math.round(result * 100) / 100;
}
