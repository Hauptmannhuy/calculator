const buttons = document.querySelectorAll('button');
let output = document.getElementById('display');
let displayValue;
let firstNumber='';
let secondNumber='';
let operator='';
let operandStatus = false;
let result;
function add(a,b){
return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate(operator,a,b){
    //pseudocode
    //if operator === + then function add()
    // if operator === / then function divide()
}

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let target = e.target;
       
       
        if (target.id === 'one-Btn'){
            if (operandStatus === true){
                secondNumber+='1';
            }
            else {
                firstNumber+='1';
            }
        }
        if (target.id === 'two-Btn'){
            if (operandStatus === true){
                secondNumber+='2';
            }
            else {
                firstNumber+='2';
            }
        }
        if (target.id === 'three-Btn'){
            if (operandStatus === true){
                secondNumber+='3';
            }
            else {
                firstNumber+='3';
            }
        }
        if (target.id === 'four-Btn'){
            if (operandStatus === true){
                secondNumber+='4';
            }
            else {
                firstNumber+='4';
            }
        }
        if (target.id === 'five-Btn'){
            if (operandStatus === true){
                secondNumber+='5';
            }
            else {
                firstNumber+='5';
            }
        }
        if (target.id === 'six-Btn'){
            if (operandStatus === true){
                secondNumber+='6';
            }
            else {
                firstNumber+='6';
            }
        }
        if (target.id === 'seven-Btn'){
            if (operandStatus === true){
                secondNumber+='7';
            }
            else {
                firstNumber+='7';
            }
        }
        if (target.id === 'eight-Btn'){
            if (operandStatus === true){
                secondNumber+='8';
            }
            else {
                firstNumber+='8';
            }
        }
        if (target.id === 'nine-Btn'){
            if (operandStatus === true){
                secondNumber+='9';
            }
            else {
                firstNumber+='9';
            }
        }
        if (target.id === 'zero-Btn'){
            if (operandStatus === true){
                secondNumber+='0';
            }
            else {
                firstNumber+='1';
            }
        }
        if (target.id === 'plus-Btn'){
            operandStatus = true;
            operator = '+'
        }
        if (target.id === 'minus-Btn'){
            operandStatus = true;
            operator = '-'
        }
        if (target.id === 'divide-Btn'){
            operandStatus = true;
            operator = '/'
        }
        if (target.id === 'multiply-Btn'){
            operandStatus = true;
            operator = '*'
        }
        if (target.id === 'equal-Btn'){
            operandStatus = false;
            operate(operator,firstNumber,secondNumber);
        }
    })
})