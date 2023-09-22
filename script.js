const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.specSymbol')
let output = document.getElementById('display');
let dot = document.getElementById('.')
let firstNumber='';
let secondNumber='';
let operator='';
let operatorStatus = false;
let result;
let dotDisabled = false;
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
                    dotDisabled=true;
                }
            }
            else {
                secondNumber+= target.id;
                output.textContent = secondNumber;
            }
        }
        else {
           if (target.id === '.'){
            if (!dotDisabled){
                firstNumber+= target.id;
                dotDisabled = true;
            }
           }
           else {
               firstNumber+=target.id;
               output.textContent = firstNumber;
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
        else if (target.id === 'clear-Btn'){
            output.innerHTML = '';
        }
        else if (target.id === 'delete-Btn'){
            output.textContent= output.textContent.slice(0,-1);
        }
        
        
        console.log('Operator:', operator);
    });
});

// function dotCheck(){
//     let displayVal = output.textContent;
//     for (let i = 0; i < displayVal.length; i++){
//         if (displayVal.length === 0){
//             dotDisabled = true;
//             break;
//         }
//         else if ('1234567890'.includes(displayVal[i])){
//             dotDisabled = false;
//             break;
//         }
//         else if (displayVal[i] === '.'){
//             dotDisabled = true;
//             break;
//         }
//         else if (displayVal[i] === '+' || displayVal[i] === '-' || displayVal[i] === '/' || displayVal[i] === '*' || displayVal[i] === '=' ){
//             dotDisabled = false;
//             break;
//         }
//     }
// }