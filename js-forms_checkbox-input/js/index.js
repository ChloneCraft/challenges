console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}
function hideSuccess() {
  success.setAttribute("hidden", "");
}
function showTosError() {
  tosError.removeAttribute("hidden");
}
function showSuccess() {
  success.removeAttribute("hidden");
}
hideTosError();
hideSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const tos = document.getElementById("tos");
  if (!tos.checked) {
    showTosError();
    return;
  } else {
    showSuccess();
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
