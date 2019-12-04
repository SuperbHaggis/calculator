//Global variables and defaults
var operator;

let display = document.querySelector('#display');
let digit = document.querySelectorAll('.digit');
let period = document.querySelector('#period');
let symbol = document.querySelectorAll('.symbol');
let clearKey = document.querySelector('#clear');
let backspace = document.querySelector('#backspace');
let equalsKey = document.querySelector('#equals');

display.textContent = '';

var values = {
  a: 0,
  b: 0,
};

//Operations
add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

//Operate function
operate = (a, b, operator) => {
  switch (operator) {
    case 'plus':
      result = add(a, b);
      break;
    case 'minus':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
  }
  console.log(result);
  (result == 'Infinity') ? (display.textContent = 'Error') : 
    (display.textContent = result.toFixed(2));
};

//Update display
updateDisplay = (userInput) => display.textContent = userInput;

document.querySelectorAll('.digit').forEach((digit) => {
  digit.addEventListener('click', e => {
    updateDisplay(display.textContent + digit.textContent);
    var displayValue = display.textContent;
    console.log(displayValue);
  });
});

//Clear Key
clearKey.addEventListener('click', e => {
  updateDisplay('');
  values.a = 0;
  values.b = 0;
});

//Operator Keys
storeValue = (operator) => {
  console.log(operator);
  values.a = display.textContent;
  display.textContent = '';
}

document.querySelectorAll('.symbol').forEach((symbol) => {
  symbol.addEventListener('click', e => {
    if (symbol.id == 'plus') {
      operator = 'plus';
    } else if (symbol.id == 'minus') {
      operator = 'minus'
    } else if (symbol.id == 'multiply') {
      operator = 'multiply'
    } else {
      operator = 'divide'
    }
    storeValue(operator);
  });
});

//Equals key
equalsKey.addEventListener('click', e => {
  values.b = display.textContent;
  a = parseFloat(values.a, 10);
  b = parseFloat(values.b, 10);
  operate(a, b, operator);
});

//Period key
period.addEventListener('click', e => {
  if ((display.textContent.indexOf('.') > -1) != true) {
    updateDisplay(display.textContent + period.textContent);
    var displayValue = display.textContent;
    console.log(displayValue);
  }
});


//Backspace key
backspace.addEventListener('click', e => {
  let displayString = display.textContent.toString();
  var displayValue = (displayString.slice(0, (displayString.length -1)));
  console.log(displayValue);
  updateDisplay(displayValue);
});
