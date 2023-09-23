const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.specSymbol')
const outputControl = document.querySelectorAll('.clear')
let currentOperation = document.getElementById('current-operation');
let lastOperation = document.getElementById('last-operation');
let dot = document.getElementById('.');
let firstNumber='';
let secondNumber='';
let operator='';
let operatorStatus = false;
let result;
let dotDisabled = false;
let firstNumberRes = '';
let secondNumberRes = '';
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
            if (target.id === '.'){
                if (!dotDisabled){
                    secondNumber+=target.id;
                    currentOperation.textContent = firstNumber;
                    dotDisabled=true;
                }
            }
            else {
                secondNumber+= target.id;
                currentOperation.textContent = secondNumber;
            }
        }
        else {
           if (target.id === '.'){
            if (!dotDisabled){
                firstNumber+= target.id;
                currentOperation.textContent = firstNumber;
                dotDisabled = true;
            }
           }
           else {
               firstNumber+=target.id;
               currentOperation.textContent = firstNumber;
           }
        }
        console.log('first',firstNumber,firstNumber.length);
        console.log('second',secondNumber,secondNumber.length);
        
    })
})

operators.forEach((element) => {
    element.addEventListener('click', (e) => {
        let target = e.target;
        dotDisabled = false;
        if ('*/+-'.includes(target.id)) {
            if (firstNumber.length > 0 && secondNumber.length > 0) {
                // Perform calculation for the previous operator
                operate(operator, firstNumber, secondNumber);
                firstNumber = result.toString();
                secondNumber = '';
                lastOperation.textContent = `${firstNumber} ${operator}`;
            }
            // Set the current operator
            operator = target.id;
            operatorStatus = true;
        } else if (target.id === '=') {
            if (firstNumber.length > 0 && secondNumber.length > 0) {
                // Perform calculation for the current operator
                operate(operator, firstNumber, secondNumber);
                operatorStatus = false;
                firstNumberRes = firstNumber;
                secondNumberRes = secondNumber;
                firstNumber = ''
                secondNumber = ''
            
                console.log(result)
               if (result %1 !== 0){
                lastOperation.textContent = `${firstNumberRes}${operator}${secondNumberRes}=${result.toFixed(3)} `
               
               }
               else {
                lastOperation.textContent = `${firstNumberRes}${operator}${secondNumberRes}=${result} `;
               }
            }
        } 
        
        
        console.log('Operator:', operator);
    });
});

outputControl.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let target = e.target;
         if (target.id === 'clear-Btn'){
            currentOperation.innerHTML = '';
            lastOperation.innerHTML = '';
            firstNumber = '';
            secondNumber = '';
        }
        else if (target.id === 'delete-Btn'){
            if (operatorStatus === true){
               secondNumber = secondNumber.slice(0,-1);
            }
            else {
               firstNumber = firstNumber.slice(0,-1);
            }
            currentOperation.textContent= currentOperation.textContent.slice(0,-1);
        }
    })
})

