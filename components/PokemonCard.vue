<template>
  <section class="pokemon-card">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        {{ pokemon.name }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PokemonAPI } from '~/services';
import type { IPokemon } from '~/types';

const pokemons = ref<IPokemon[]>([]);
const notRemovedPokemons = ref<IPokemon[]>([]);

onMounted(async () => {
  const pokemonAPI = new PokemonAPI();
  const pokemonsResponse = await pokemonAPI.getAllPokemonsData();
  pokemons.value = pokemonsResponse;
  notRemovedPokemons.value = pokemonsResponse;
})
</script>

<style scoped>
.pokemon-card {
  border-radius: 8px;
  padding: 12px;
  height: 100%;
  margin: 8px;
  text-align: center;
  border: 8px solid #222;
  image-rendering: pixelated;
  box-shadow: 0 0 0 4px #fff, 0 0 0 8px #222;
  border-radius: 20px;
}
</style>