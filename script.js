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
            output.textContent = secondNumber;
        }
        else {
            firstNumber+=target.id;
            output.textContent = firstNumber;
        }
        console.log('first',firstNumber,firstNumber.length);
        console.log('second',secondNumber,secondNumber.length);
        
    })
})

operators.forEach((element) => {
    element.addEventListener('click', (e) => {
        let target = e.target;
        
        if ('*/+-'.includes(target.id)) {
            if (firstNumber.length > 0 && secondNumber.length > 0) {
                // Perform calculation for the previous operator
                operate(operator, firstNumber, secondNumber);
                firstNumber = result.toString();
                secondNumber = '';
                output.textContent = firstNumber;
            }
            // Set the current operator
            operator = target.id;
            operatorStatus = true;
        } else if (target.id === '=') {
            if (firstNumber.length > 0 && secondNumber.length > 0) {
                // Perform calculation for the current operator
                operate(operator, firstNumber, secondNumber);
                operatorStatus = false;
                firstNumber = ''
                secondNumber = ''
            
                console.log(result)
               if (result %1 !== 0){
                output.textContent = result.toFixed(3)
               
               }
               else {
                output.textContent = result;
               }
            }
        } 
        
        
        console.log('Operator:', operator);
    });
});