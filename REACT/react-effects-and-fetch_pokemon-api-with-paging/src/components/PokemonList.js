import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentAPI, setCurrentAPI] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );
  let nextAPI = "";

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(currentAPI);
        const data = await response.json();
        console.log(data);
        setPokemon(data.results);
        nextAPI = data.next;
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [currentAPI]);

  function changeAPI() {
    setCurrentAPI({ nextAPI });
    console.log({ currentAPI });
  }
  return (
    <main>
      <button type="button" onClick={changeAPI}>
        Previous Page
      </button>
      <button type="button" onClick={changeAPI}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
