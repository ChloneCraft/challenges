import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Look at this headline</h1>
      <p>here is more information about this</p>
    </article>
  );
}
