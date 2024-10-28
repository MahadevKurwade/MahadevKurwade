let expression = '';

function appendNumber(number) {
    if (number === '.' && expression.endsWith('.')) return;
    expression += number;
    updateDisplay();
}

function chooseOperation(op) {
    const lastChar = expression[expression.length - 1];
    // Replace the last operator if it's not a number or a decimal point
    if (['+', '-', '*', '/'].includes(lastChar)) {
        expression = expression.slice(0, -1) + op;
    } else {
        expression += op;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        // Evaluate the expression using JavaScript's eval function.
        let result = eval(expression);
        result = parseFloat(result.toFixed(10)); // Avoid long decimal numbers.
        addToHistory(`${expression} = ${result}`);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.innerText = expression || '0';
}

function addToHistory(calculation) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = calculation;
    historyList.appendChild(listItem);
}
