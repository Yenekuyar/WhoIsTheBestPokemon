<template>
  <section class="pokemon-card">
    <div class="pokemon-card-image">
      <img :src="randomPokemon?.url" alt="Pokemon Image" />
    </div>
    <div class="pokemon-card-name">
      {{ randomPokemon?.name }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { PokemonAPI } from '~/services';
import type { IPokemon } from '~/types/IPokemon'

const props = defineProps<{
  randomPokemon: IPokemon
}>()

const pokemonApi = new PokemonAPI();
const pokemonData = await pokemonApi.getSinglePokemonData(props.randomPokemon.name);

props.randomPokemon.url = pokemonData.sprites?.front_default ?? '';

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