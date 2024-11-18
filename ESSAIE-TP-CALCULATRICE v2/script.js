function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    if (display.value !== '' && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

function appendDot() {
    const display = document.getElementById('display');
    const lastNumber = display.value.split(/\+|\-|\*|\//).pop();
    if (!lastNumber.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erreur';
    }
}