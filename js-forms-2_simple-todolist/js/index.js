console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
//task #1
const headline = document.getElementById("headline");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  form.reset();
  headline.focus();
  //task #2
  createListItem(data);
});

function createListItem(data) {
  const newHeadline = document.createElement("h2");
  newHeadline.textContent = data.headline;
  const newTask = document.createElement("p");
  newTask.textContent = data.task;
  todoList.append(newHeadline);
  todoList.append(newTask);
}
