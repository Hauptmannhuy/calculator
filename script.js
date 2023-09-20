const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.specSymbol')
let output = document.getElementById('display');
let firstNumber='';
let secondNumber='';
let operator='';
let operatorStatus = false;
let result;
function add(a,b){
    return a*1+b*1;
}

function subtract(a,b){
    return a*1-b*1;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate(operator,a,b){
    if (operator === '+'){
      result = add(a,b);
      
    }
    else if (operator === '-'){
      result = subtract(a,b);
    }
    else if (operator === '*'){
      result = multiply(a,b);
    }
    else if (operator === '/'){
        result = divide(a,b);
        
    }
}

numbers.forEach((number)=>{
    number.addEventListener('click', (e)=>{
        let target = e.target;
        
        if (operatorStatus === true){
            secondNumber+= target.id;
        }
        else {
            firstNumber+=target.id;
        }
        console.log('first',firstNumber,firstNumber.length);
        console.log('second',secondNumber,secondNumber.length);
        
    })
})

operators.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        let target = e.target;
        let operatorPair = '';
        if (('*/+-').includes(target.id) && firstNumber.length > 0 && secondNumber.length > 0){
            operatorPair = target.id;
            operate(operatorPair,firstNumber,secondNumber);
            firstNumber = result.toString();
            secondNumber = '';
            console.log('if more than one pair', firstNumber)
        }
        else {
            if (target.id === '='){
            operate(operator,firstNumber,secondNumber);
            operatorStatus = false;
            firstNumber = '';
            secondNumber= '';
            console.log(result);
        }
        else {
            operator = target.id;
            operatorStatus = true;
        }
        console.log(operatorStatus)
        }
        
        
    })
})