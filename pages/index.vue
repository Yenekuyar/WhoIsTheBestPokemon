<template>
  <GameConfigModal v-if="!showGameModal" @play="showGameModal = true"/>
  <GameModal v-if="showGameModal" />
  <div class="home"></div>
</template>

<script setup>
import { ref } from 'vue';

const showGameModal = ref(false);
</script>

<style scoped>
.home {
  background: url('/img/pokemonBackground.png') repeat-x aquamarine;
  background-size: cover;
  min-height: 100vh;
  animation: move-bg 20s linear infinite;
  position: relative;
  overflow: hidden;
}

.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  z-index: 1;
}

.home>* {
  position: relative;
  z-index: 2;
}

@keyframes move-bg {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: 100vw;
  }
}
</style>
