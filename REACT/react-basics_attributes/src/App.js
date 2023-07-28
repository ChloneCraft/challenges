import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Why do you think Koalas suck!</h2>
      <label htmlFor="answer">Answer:</label>
      <input id="answer"></input>
      <a className="article__link" href="https://en.wikipedia.org/wiki/Koala">
        learn about Koalas here!
      </a>
    </article>
  );
}
