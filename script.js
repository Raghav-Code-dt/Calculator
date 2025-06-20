const display = document.querySelectorAll('input')

let currentInput = '';
// let previousEntry = '';

function appendNumber(number){
    currentInput += number;
    display[1].value = currentInput
    // console.log(lower.value)
}

function appendOperation(operation){
    if (currentInput === '' && operation !== '-') return;
    if (['+', '-', '*', '/'].includes(currentInput.slice(-1)) && ['+', '-', '*', '/'].includes(operation)) {
        // Replace last operator if a new operator is pressed
        currentInput = currentInput.slice(0, -1) + operation;
    } else {
        currentInput += operation;
    }
    display[1].value = currentInput;
}


function calculate() {
    try {
        let result = eval(currentInput); // eval() is used for simplicity, but consider security for production
        display[0].value = result;
        currentInput = result.toString();
        // display[1].value = ''
        // previousEntry = result;
    } catch (error) {
        display[0].value = 'Error';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.forEach(dis => dis.value = '');
}

function backspace(){
    const i = currentInput.split('')
    i.pop();
    currentInput = i.join('')
    display[1].value = currentInput;
}