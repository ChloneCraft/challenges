import "./styles.css";

export default function App() {
  return <Greeting name="Yair" />;
}

// function Greeting({ name }) {
//   return <h1>Hello {name}!</h1>;
// }
function Greeting({ name }) {
  return <h1>Hello {name === "Yair" ? "Coach" : name}!</h1>;
}
