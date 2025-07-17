let display = document.getElementById("display");
let currentInput = "";

function appendNumber(num) {
  if (display.innerText === "0" || display.innerText === "Error") {
    currentInput = num;
  } else {
    currentInput += num;
  }
  display.innerText = currentInput;
}

function appendOperator(op) {
  if (currentInput.length === 0) return;
  let lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  display.innerText = currentInput;
}

function appendDecimal() {
  const parts = currentInput.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes(".")) {
    currentInput += ".";
    display.innerText = currentInput;
  }
}

function toggleSign() {
  if (currentInput) {
    currentInput = eval(currentInput) * -1 + "";
    display.innerText = currentInput;
  }
}

function clearDisplay() {
  currentInput = "";
  display.innerText = "0";
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || "0";
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
  } catch (error) {
    display.innerText = "Error";
    currentInput = "";
  }
}

document.getElementById("toggle").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
