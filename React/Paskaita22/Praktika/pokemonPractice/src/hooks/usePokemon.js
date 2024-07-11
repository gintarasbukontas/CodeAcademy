import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Function to fetch Pokémon data
const fetchPokemon = async () => {
  //   const { data } = await axios.get(
  //     "https://pokeapi.co/api/v2/pokemon?limit=151"
  //   );
  //   return data.results;
  // };
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  return response.data.results;
};

// Custom hook to use the Pokémon data query
const usePokemon = () => {
  return useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
  });
};

export default usePokemon;
