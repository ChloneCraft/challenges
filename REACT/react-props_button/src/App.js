import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    alert("oh yes!");
    console.log("look at me! im working just fine!");
  };
  return (
    <Button
      color="rgb(0,255,255)"
      disabled={false}
      text="Click me hard!"
      onClick={handleClick}
    />
  );
}
function Button({ color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ height: "100px", backgroundColor: color }}
    >
      {text}
    </button>
  );
}
