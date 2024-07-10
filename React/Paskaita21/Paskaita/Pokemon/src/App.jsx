import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import PokemonDisplay from "./components/PokemonDisplay/PokemonDisplay";

function App() {
  const [pokemon, setPokemon] = useState(null);

  return (
    <div>
      <Form setPokemon={setPokemon} />
      <br />
      <PokemonDisplay pokemon={pokemon} />
    </div>
  );
}

export default App;
