const number = document.querySelector(".number");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const resetBtn = document.querySelector(".reset");

let num = 0;

plusBtn.addEventListener("click", () => {
  num++;
  number.innerText = num;
  console.log("plus by one");
});
minusBtn.addEventListener("click", () => {
  num--;
  number.innerText = num;
  console.log("minus by one");
});
resetBtn.addEventListener("click", () => {
  num = 0;
  number.innerText = num;
  console.log("reset the value by zero");
});
