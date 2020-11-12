const increaseBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decreseBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const valueEl = document.querySelector('#value');

let counterValue = 0;
function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
increaseBtn.addEventListener('click', increment);
decreseBtn.addEventListener('click', decrement);