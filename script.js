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

function displayResult(){

}


let input = document.querySelector('input');
let operator = "";
let currentNum = "";
let previousNum = 0;
let result = 0;
let equals = false; // check if you have clicked equals and then a number before an operator to clear the numbers
let stringOperators = false; // check if you string operators before clicking equals to display the result

document.addEventListener("click", event => {
    let btnClicked = event.target;
    
    if (btnClicked.classList.contains('operator')){
        if(stringOperators){  
            result = operate(previousNum, currentNum, operator)
            previousNum = result;
            currentNum = "";
            input.value = result;
        }
        operator = btnClicked.textContent;
        if(!stringOperators){
            stringOperators = true;
            previousNum = +currentNum;
            currentNum = "";
        }   
    }

    if (btnClicked.classList.contains('number')){
        if(equals){
            currentNum = btnClicked.textContent;
            equals = false;
            input.value = currentNum;
        }else{
            currentNum = currentNum + btnClicked.textContent;
            input.value = currentNum;
        }
    }
    if (btnClicked.classList.contains('equals')){
        result = operate(previousNum, currentNum, operator)
        equals = true;
        currentNum = result;
        stringOperators = false;
        input.value = result;
    }
    if (btnClicked.classList.contains('clear')){
        operator = ""
        currentNum = "";
        previousNum = 0;
        result = 0
        equals = false;
        stringOperators = false;
        input.value = "";
    }
    if (btnClicked.classList.contains('backspace')){
        input.value = "";        
        currentNum = "";
    }
});



// document.addEventListener('keydown', event => {
//     if (event.key){
//         if(stringOperators){  
//             result = operate(previousNum, currentNum, operator)
//             previousNum = result;
//             currentNum = "";
//             input.value = result;
//         }
//         operator = btnClicked.textContent;
//         if(!stringOperators){
//             stringOperators = true;
//             previousNum = +currentNum;
//             currentNum = "";
//         }   
//     }

//     if (btnClicked.classList.contains('number')){
//         if(equals){
//             currentNum = btnClicked.textContent;
//             equals = false;
//             input.value = currentNum;
//         }else{
//             currentNum = currentNum + btnClicked.textContent;
//             input.value = currentNum;
//         }
//     }
//     if (btnClicked.classList.contains('equals')){
//         result = operate(previousNum, currentNum, operator)
//         equals = true;
//         currentNum = result;
//         stringOperators = false;
//         input.value = result;
//     }
//     if (btnClicked.classList.contains('clear')){
//         operator = ""
//         currentNum = "";
//         previousNum = 0;
//         result = 0
//         equals = false;
//         stringOperators = false;
//         input.value = "";
//     }
//     if (btnClicked.classList.contains('backspace')){
//         input.value = "";        
//         currentNum = "";
//     }
// });