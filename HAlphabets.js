
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


// Create an array for each set of numbers
const evenNumbers = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "अं", "अः", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ"];
const oddNumbers = ["ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "ए", "ख", "ब", "ण", "थ"];

let isEvenSet = true; // Variable to track the current set of numbers being displayed
let timer; // Variable to store the timer

// Function to toggle between even and odd numbers and update the display
function toggleNumbers() {
  const numberDisplay = document.getElementById('numberDisplay');
  isEvenSet = !isEvenSet;
  const numbersToShow = isEvenSet ? evenNumbers : oddNumbers;
  const randomNumber = numbersToShow[Math.floor(Math.random() * numbersToShow.length)];
  numberDisplay.textContent = randomNumber;
}

// Function to start the timer
function startTimer() {
  let seconds = 0;
  timer = setInterval(() => {
    document.getElementById('timerDisplay').textContent = `Time: ${seconds} seconds`;
    seconds++;
  }, 1000);
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timer);
}

// Add click event listener to the container to toggle numbers on click
document.querySelector('.container').addEventListener('click', () => {
  if (document.getElementById('numberDisplay').textContent === 'Click to Start') {
    // Start the timer when the game starts
    startTimer();
  }
  toggleNumbers();
});
