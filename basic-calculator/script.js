// let sumOP = document.getElementById('sum')
// let subsOP = document.getElementById('subs')
// let divideOP = document.getElementById('divide')
// let multOP = document.getElementById('mult')
// let modOP = document.getElementById('mod')

// sumOP.addEventListener('click', sumFunc(){
// })

const resultDOM = document.querySelector('#result')
resultDOM.innerHTML = localStorage.getItem('result')

function Calculator(operator) {
    const value1 = parseFloat(document.querySelector('#value-1').value);
    const value2 = parseFloat(document.querySelector('#value-2').value);    
    let result;
    let Nullerror = 'Please enter a valid numbers!'

    if(!value1 || !value2){
        alert(Nullerror)
        return;
    }
 
    switch (operator) {
        case '+':
            result = value1 + value2
            break;
        case '-':
            result = value1 - value2
            break;    
        case '/':
            result = value1 / value2
            break;   
        case '*':
            result = value1 * value2
            break;
        case '%':
            result = value1 % value2
            break;  
        default : 
            resultDOM.innerHTML = `Undefined Operator!!`
    }
    localStorage.setItem('result' , result)
    resultDOM.innerHTML = `${result}`;
}
