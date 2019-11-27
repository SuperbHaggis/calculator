//Add
add = (a, b) => a + b;

//Subtract
subtract = (a, b) => a - b;

//Multiply
multiply = (a, b) => a * b;

//Divide
divide = (a, b) => a / b;

//Operate
operate = (a, b, operator) => {
  switch (operator) {
    case 'plus':
      console.log(add(a, b));
      break;
    case 'minus':
      console.log(subtract(a, b));
      break;
    case 'multiply':
      console.log(multiply(a, b));
      break;
    case 'divide':
      console.log(divide(a, b));
      break;
  }
}

//Update display
const shell = document.querySelector('#shell');
const display = document.querySelector('#display');
updateDisplay = () => display.textContent('test');

let digit = document.querySelectorAll('.number')
document.querySelectorAll('.number').forEach((numbers) => {
  button.addEventListener('click', e => {
    updateDisplay();
  });
});