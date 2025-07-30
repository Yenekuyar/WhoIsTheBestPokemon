<template>
  <section class="pokemon-card">
    <h2>Bulbasaur</h2>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" width="400">
    <footer>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png" alt="">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png" alt="">
    </footer>
  </section>
</template>

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