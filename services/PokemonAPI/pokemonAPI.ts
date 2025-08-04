import type { IPokemon } from "~/types";

class PokemonAPI {
  constructor(private baseUrl = 'https://pokeapi.co/api/v2', private httpClient = fetch) {}

  public async getAllPokemonsData(): Promise<IPokemon[]> {
    const response = await this.httpClient(`${this.baseUrl}/pokemon?limit=2000`);
    const data = await response.json();
    return data.results;
  }
}

export default PokemonAPI;