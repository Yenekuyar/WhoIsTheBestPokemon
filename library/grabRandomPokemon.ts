import type { IPokemon } from "~/types";

// O(1) time complexity
function grabTwoRandomPokemon(pokemons: IPokemon[], removedPokemon?: number): [IPokemon, IPokemon] {
  if (pokemons.length < 2) throw new Error("Array must have at least two pokemons");

  let firstIndex = Math.floor(Math.random() * pokemons.length);
  let secondIndex: number;

  do {
    secondIndex = Math.floor(Math.random() * pokemons.length);
  } while (secondIndex === firstIndex);

  const firstPokemon = pokemons[firstIndex];
  const secondPokemon = pokemons[secondIndex];

  return [firstPokemon as IPokemon, secondPokemon as IPokemon];
}

export default grabTwoRandomPokemon;