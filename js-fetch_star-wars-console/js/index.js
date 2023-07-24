console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log("response:", response);
  console.log("data:", data);
  console.log("R2-D2 eye color:", data.results[2].eye_color);
}

await fetchData();
