
  let displayValue = "";
let currentOperator = "";
let currentNumber = 0;
let result = 0;

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function appendNumber(num) {
  if (displayValue === "0" || displayValue === "Error") {
    displayValue = num.toString();
  } else {
    displayValue += num;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  currentOperator = "";
  currentNumber = 0;
  result = 0;
  updateDisplay();
}

function removeLast() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = "0";
  }
  updateDisplay();
}
updateDisplay();
