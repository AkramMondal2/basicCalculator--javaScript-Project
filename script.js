const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const equal = document.querySelector("#equal");
const allClear = document.querySelector("#allClear");
const clear = document.querySelector("#clear");
const percentage = document.querySelector("#percentage");
const plusMinus = document.querySelector("#plusMinus");
const dot = document.querySelector("#dot");

let operand1 = 0;
let operand2 = 0;
let result = 0;
let count = 0;
let storeOperator = "";

number.forEach((item) => {
  item.addEventListener("click", () => {
    display.innerText += item.innerText;
  });
});

operator.forEach((item) => {
  item.addEventListener("click", () => {
    operand1 = Number(display.innerText);
    storeOperator = item.innerText;
    display.innerText = "";
    count = 0;
  });
});

equal.addEventListener("click", () => {
  operand2 = Number(display.innerText);

  if (storeOperator === "+") {
    result = operand1 + operand2;
    display.innerText = result;
    operand1 = result;
    operand2 = "";
  } else if (storeOperator === "-") {
    result = operand1 - operand2;
    display.innerText = result;
    operand1 = result;
    operand2 = "";
  } else if (storeOperator === "X") {
    result = operand1 * operand2;
    display.innerText = result;
    operand1 = result;
    operand2 = "";
  } else if (storeOperator === "/") {
    result = operand1 / operand2;
    display.innerText = result;
    operand1 = result;
    operand2 = "";
  }
  
  if (!display.innerText.includes(".")) {
    count = 0;
  }
});

allClear.addEventListener("click", () => {
  display.innerText = "";
  count = 0;
});

clear.addEventListener("click", () => {
  if (
    display.innerText === "Infinity" ||
    display.innerText === "-Infinity" ||
    display.innerText === "NaN"
  ) {
    display.innerText = "";
  } else {
    display.innerText = display.innerText.slice(0, -1);
    if (!display.innerText.includes(".")) {
      count = 0;
    }
  }
});

percentage.addEventListener("click", () => {
  display.innerText = display.innerText / 100;
});

plusMinus.addEventListener("click", () => {
  display.innerText *= -1;
});

dot.addEventListener("click", () => {
  if (count === 0) {
    display.innerText += dot.innerText;
    count++;
  }
});
