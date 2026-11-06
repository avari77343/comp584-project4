// Calculator logic is implemented with variables, functions, conditionals,
// and event handling. No eval() or other expression-evaluation shortcut is used.
const display = document.querySelector("#display");
const buttons = document.querySelector(".calculator-buttons");

let currentInput = "0";
let previousInput = null;
let selectedOperator = null;
let shouldStartNewInput = false;

function updateDisplay() {
  display.textContent = currentInput;
}

function enterNumber(number) {
  if (currentInput === "Error" || shouldStartNewInput) {
    currentInput = number;
    shouldStartNewInput = false;
  } else if (currentInput === "0") {
    currentInput = number;
  } else if (currentInput.length < 14) {
    currentInput += number;
  }
  updateDisplay();
}

function chooseOperator(operator) {
  if (currentInput === "Error") return;

  if (selectedOperator !== null && !shouldStartNewInput) {
    calculate();
  }

  previousInput = Number(currentInput);
  selectedOperator = operator;
  shouldStartNewInput = true;
}

function calculate() {
  if (selectedOperator === null || previousInput === null) return;

  const secondInput = Number(currentInput);
  let answer;

  switch (selectedOperator) {
    case "+": answer = previousInput + secondInput; break;
    case "-": answer = previousInput - secondInput; break;
    case "*": answer = previousInput * secondInput; break;
    case "/":
      if (secondInput === 0) {
        currentInput = "Error";
        previousInput = null;
        selectedOperator = null;
        shouldStartNewInput = true;
        updateDisplay();
        return;
      }
      answer = previousInput / secondInput;
      break;
    default: return;
  }

  // Limit floating-point display noise while keeping useful precision.
  currentInput = String(Number(answer.toPrecision(12)));
  previousInput = null;
  selectedOperator = null;
  shouldStartNewInput = true;
  updateDisplay();
}

function clearCalculator() {
  currentInput = "0";
  previousInput = null;
  selectedOperator = null;
  shouldStartNewInput = false;
  updateDisplay();
}

function removeLastDigit() {
  if (currentInput === "Error" || shouldStartNewInput) {
    currentInput = "0";
    shouldStartNewInput = false;
  } else {
    currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
  }
  updateDisplay();
}

buttons.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.number !== undefined) {
    enterNumber(button.dataset.number);
  } else if (button.dataset.operator) {
    chooseOperator(button.dataset.operator);
  } else if (button.dataset.action === "equals") {
    calculate();
  } else if (button.dataset.action === "clear") {
    clearCalculator();
  } else if (button.dataset.action === "backspace") {
    removeLastDigit();
  }
});

// Keyboard support: digits, + - * /, Enter, Backspace, and Escape.
document.addEventListener("keydown", (event) => {
  if (/^[0-9]$/.test(event.key)) enterNumber(event.key);
  else if (["+", "-", "*", "/"].includes(event.key)) chooseOperator(event.key);
  else if (event.key === "Enter" || event.key === "=") calculate();
  else if (event.key === "Backspace") removeLastDigit();
  else if (event.key === "Escape") clearCalculator();
});
