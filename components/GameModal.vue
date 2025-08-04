<template>
  <div class="game-modal-component">
    <section>
      <PokemonCard v-if="player1Pokemon" :randomPokemon="player1Pokemon" />
    </section>
    <section>
      <PokemonCard v-if="player2Pokemon" :randomPokemon="player2Pokemon" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { grabRandomPokemon } from '~/library';
import { PokemonAPI } from '~/services';
import type { IPokemon } from '~/types';
import PokemonCard from './PokemonCard.vue';

const player1Pokemon = ref<IPokemon>();
const player2Pokemon = ref<IPokemon>();

const pokemons = ref<IPokemon[]>([]);
const remainingPokemons = ref<IPokemon[]>([]);

onMounted(async () => {
  const pokemonAPI = new PokemonAPI();
  const pokemonsResponse = await pokemonAPI.getAllPokemonsData();
  pokemons.value = pokemonsResponse;
  remainingPokemons.value = pokemonsResponse;

  player1Pokemon.value = grabRandomPokemon(remainingPokemons.value)[0];
  player2Pokemon.value = grabRandomPokemon(remainingPokemons.value)[1];
})
</script>

<style scoped>
.game-modal-component {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #181818;
  padding: 20px;
  width: 80vw;
  height: 40vw;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
</style>