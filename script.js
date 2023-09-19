const buttons = document.querySelectorAll('button');
let output = document.getElementById('display');
let displayValue;
let firstNumber = null;
let secondNumber = null;
let operand = null;

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

}

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let target = e.target;
        if (target.id === 'one-Btn'){
            displayValue += "1";
            output.textContent = displayValue;
        }
        if (target.id === 'two-Btn'){
            displayValue += "2";
            output.textContent = displayValue;
        }
        if (target.id === 'three-Btn'){
            displayValue += "3";
            output.textContent = displayValue;
        }
        if (target.id === 'four-Btn'){
            displayValue += "4";
            output.textContent = displayValue;
        }
        if (target.id === 'five-Btn'){
            displayValue += "5";
            output.textContent = displayValue;
        }
        if (target.id === 'six-Btn'){
            displayValue += "6";
            output.textContent = displayValue;
        }
        if (target.id === 'seven-Btn'){
            displayValue += "7";
            output.textContent = displayValue;
        }
        if (target.id === 'eight-Btn'){
            displayValue += "8";
            output.textContent = displayValue;
        }
        if (target.id === 'nine-Btn'){
            displayValue += "9";
            output.textContent = displayValue;
        }
        if (target.id === 'zero-Btn'){
            displayValue += "0";
            output.textContent = displayValue;
        }
        if (target.id === 'plus-Btn'){
            displayValue += "+";
            output.textContent = displayValue;
        }
        if (target.id === 'minus-Btn'){
            displayValue += "-";
            output.textContent = displayValue;
        }
        if (target.id === 'divide-Btn'){
            displayValue += "/";
            output.textContent = displayValue;
        }
        if (target.id === 'multiply-Btn'){
            displayValue += "*";
            output.textContent = displayValue;
        }
        if (target.id === 'equal-Btn'){
            displayValue += "=";
            output.textContent = displayValue;
        }
    })
})