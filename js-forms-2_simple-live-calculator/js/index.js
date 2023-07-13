console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

function multiplyFields() {
  result.innerHTML = firstInput.value * secondInput.value;
}

firstInput.addEventListener("input", (event) => {
  multiplyFields();
});
secondInput.addEventListener("input", (event) => {
  multiplyFields();
});
