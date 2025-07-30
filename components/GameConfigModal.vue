<template>
  <div class="game-config-modal-component">
    <h2 class="game-config-modal-title">Who is the Best Pokémon?</h2>
    <select class="game-config-modal-select-gen" required>
      <option value="" disabled selected>Select Game Length</option>
      <option value="short">Short - (50 Pokemons)</option>
      <option value="medium">Medium - (250 Pokemons)</option>
      <option value="long">Long - (500 Pokemons)</option>
      <option value="verylong">Very Long - (All Pokemons)</option>
    </select>
    <select class="game-config-modal-select-gen" required>
      <option value="" disabled selected>Select Generation</option>
      <option value="allgen">All Generations</option>
      <option value="gen1">Generation 1</option>
      <option value="gen2">Generation 2</option>
      <option value="gen3">Generation 3</option>
      <option value="gen4">Generation 4</option>
      <option value="gen5">Generation 5</option>
      <option value="gen6">Generation 6</option>
      <option value="gen7">Generation 7</option>
      <option value="gen8">Generation 8</option>
      <option value="gen8">Generation 9</option>
    </select>
    <button class="game-config-modal-submit-button" @click="startGame">Play!</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['play'])

function startGame() {
  emit('play')
}
</script>


<style scoped>
.game-config-modal-title {
  color: whitesmoke;
}

.game-config-modal-select-gen{
  width: 100%;
  background-color: #282828;
  color: whitesmoke;
  border: none;
  border-radius: 5px;
  padding: 10px;

  option {
    background-color: #282828;
    color: whitesmoke;
  }
}

.game-config-modal-component {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #181818;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
}

.game-config-modal-submit-button {
  background-color: #DD8B59;
  color: white;
  border: none;
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>