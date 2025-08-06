<template>
  <section class="pokemon-card">
    <header class="card-header">{{ capitalize(randomPokemon?.name) }}</header>
    <main class="pokemon-card-image">
      <img :src="randomPokemon?.url" :alt="`Pokemon Image of ${randomPokemon?.name}`" style="width: 50%;" />
    </main>
    <footer class="card-types">
      <img v-for="types in randomPokemon?.types" :src="`/img/pokemonTypes/${types?.type.name}.png`" :alt="`Move Image of ${types?.type.name}`" />
    </footer>
  </section>
</template>

<script setup lang="ts">
import capitalize from '~/utils/capitalize';
import { defineProps } from 'vue'
import { PokemonAPI } from '~/services';
import type { IPokemon } from '~/types/IPokemon'

const props = defineProps<{
  randomPokemon: IPokemon
}>()

const pokemonApi = new PokemonAPI();
const pokemonData = await pokemonApi.getSinglePokemonData(props.randomPokemon.name);

props.randomPokemon.url = pokemonData.sprites?.front_default ?? '';
props.randomPokemon.types = pokemonData.types ?? [];

</script>

<style scoped>
.pokemon-card {
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  translate: -6px -6px;
  background: #343435;
  border: 3px solid #000000;
  box-shadow: 12px 12px 0 #000000;
  overflow: hidden;
  transition: all 0.3s ease;
}

.pokemon-card-image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-header {
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 900;
  width: 100%;
  height: 32px;
  background: #ffffff;
  padding: 5px 12px;
  color: #000000;
  border-bottom: 3px solid #000000;
}

.card-types {
  flex: 1 1;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
}
</style>