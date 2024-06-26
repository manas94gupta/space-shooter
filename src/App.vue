<template>
  <div id="app">
    <GameCanvas />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GameCanvas from './components/GameCanvas.vue'

export default defineComponent({
  components: {
    GameCanvas,
  },
})
</script>

<style scoped></style>
