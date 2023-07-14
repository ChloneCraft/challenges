console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const h1 = document.createElement("h1");
h1.textContent = "Social Media Post";
document.querySelector("body").append(h1);

const article = document.createElement("article");
article.classList.add("post");
document.querySelector("body").append(article);

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
article.append(postContent);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
article.append(footer);

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@username";
footer.append(username);

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.setAttribute("data-js", "like-button");
postButton.setAttribute("type", "button");
postButton.textContent = "♥ Like";
footer.append(postButton);
