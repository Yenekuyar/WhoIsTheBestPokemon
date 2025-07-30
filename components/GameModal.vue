<template>
  <div class="game-modal-component">
    <section>
      <PokemonCard />
    </section>
    <section>
      <PokemonCard />
    </section>
  </div>
</template>

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