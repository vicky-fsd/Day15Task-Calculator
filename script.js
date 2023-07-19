function appendToDisplay(value) {
    document.getElementById('result').value += value;
}
function clearDisplay() {
    document.getElementById('result').value = '';
}
function calculate() {
    const expression = document.getElementById('result').value;
    let result;

    try {
        result = eval(expression);
    } catch (error) {
        result = 'Error';
    }

    document.getElementById('result').value = result;
}
function deleteLastCharacter() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
};


