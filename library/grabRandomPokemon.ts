import type { IPokemon } from "~/types";

function grabRandomPokemon(pokemons: IPokemon[], removedPokemon: number): IPokemon | undefined {
  if (pokemons.length === 0) {
    return undefined;
  }
  const availablePokemons = pokemons.filter(pokemon => pokemon.name !== removedPokemon.toString());
  const randomIndex = Math.floor(Math.random() * availablePokemons.length);
  return availablePokemons[randomIndex];
}