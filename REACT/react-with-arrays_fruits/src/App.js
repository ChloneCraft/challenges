import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 3,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 4,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 5,
      name: "🍓 Strawberry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
