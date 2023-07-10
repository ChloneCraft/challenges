console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const title = document.querySelector(".title");
document.querySelector(".button--dark").addEventListener("click", function() {
    bodyElement.style.backgroundColor = "rgb(50, 51, 58)";
    title.style.color = "#bac4c9";
    // bodyElement.classList.add("dark");
})

document.querySelector(".button--light").addEventListener("click", function() {
    bodyElement.style.backgroundColor = "#bac4c9";
    title.style.color = "rgb(50, 51, 58)";
    // bodyElement.classList.remove("dark");
})
document.querySelector(".button--toggle").addEventListener("click", function() {
    bodyElement.classList.toggle("dark");
})