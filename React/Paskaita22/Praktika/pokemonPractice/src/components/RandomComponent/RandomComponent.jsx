import usePokemon from "../../hooks/usePokemon";

export default function RandomComponent() {
  const { data: pokemon, error, isLoading } = usePokemon();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading Pokémon data</div>;

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
