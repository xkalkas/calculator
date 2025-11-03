function operate(num1, num2, operator){
    if (operator==='+') return add(num1, num2);
    if (operator==='-') return subtract(num1, num2);
    if (operator==='*') return multiply(num1, num2);
    if (operator==='/') return divide(num1, num2);
}

function add(num1, num2){
    let result = (+num1)+(+num2);
    return Math.round(result * 1000) / 1000;
}

function subtract(num1, num2){
    let result = (+num1)-(+num2);
    return Math.round(result * 1000) / 1000;
}

function multiply(num1, num2){
    let result = (+num1)*(+num2);
    return Math.round(result * 1000) / 1000;
}

function divide(num1, num2){
    if ((+num2)===0){
        return 'Number 2 cannot be 0';
    }
    let result = (+num1)/(+num2);
    return Math.round(result * 1000) / 1000;
}


let input = document.querySelector('input');
let operator = "";
let currentNum = "";
let previousNum = 0;
let result = 0;
let equals = false;

document.addEventListener("click", event => {
    let btnClicked = event.target;
    
    if (btnClicked.classList.contains('operator')){
        operator = btnClicked.textContent;
        // if(currentNum!="" && previousNum!=0){
        //     result = operate(previousNum, currentNum, operator)
        //     equals = true;
        //     currentNum = result;
        // }
        previousNum = +currentNum;
        currentNum = "";
        console.log(operator);
        
    }
    if (btnClicked.classList.contains('number')){
        if(equals){
            currentNum = btnClicked.textContent;
            equals = false;
            console.log(currentNum);
        }else{
            currentNum = currentNum + btnClicked.textContent;
            console.log(currentNum);
        }
    }
    if (btnClicked.classList.contains('equals')){
        result = operate(previousNum, currentNum, operator)
        equals = true;
        currentNum = result;
        console.log(result)
    }
    if (btnClicked.classList.contains('clear')){
        operator = ""
        currentNum = "";
        previousNum = 0;
        result = 0
        equals = false;
        console.clear();
    }
    if (btnClicked.classList.contains('backspace')){
        currentNum = "";
    }
});