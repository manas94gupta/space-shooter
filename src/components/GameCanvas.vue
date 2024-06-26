<template>
  <div class="game">
    <canvas ref="gameCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    <ScoreLivesDisplay
      :score="score"
      :lives="lives"
      :gameStarted="gameStarted"
      :gameOver="gameOver"
      :highestScore="highestScore"
    />
    <div v-if="!gameStarted && !gameOver" class="overlay">
      <GameInstructions />
    </div>
    <div v-if="gameOver" class="overlay">
      <GameOver :score="score" :highestScore="highestScore" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useGameLogic } from '../game/gameLogic'
import GameInstructions from './GameInstructions.vue'
import GameOver from './GameOver.vue'
import ScoreLivesDisplay from './ScoreLivesDisplay.vue'

export default defineComponent({
  components: {
    GameInstructions,
    GameOver,
    ScoreLivesDisplay,
  },
  setup() {
    const canvasWidth = 800
    const canvasHeight = 600
    const gameCanvas = ref<HTMLCanvasElement | null>(null)
    const context = ref<CanvasRenderingContext2D | null>(null)

    const { score, lives, gameStarted, gameOver, highestScore } = useGameLogic(
      context,
      canvasWidth,
      canvasHeight
    )

    onMounted(() => {
      // initialize canvas context
      if (gameCanvas.value) {
        context.value = gameCanvas.value.getContext('2d')
      }
    })

    return {
      canvasWidth,
      canvasHeight,
      gameCanvas,
      score,
      lives,
      gameStarted,
      gameOver,
      highestScore,
    }
  },
})
</script>

<style scoped>
.game {
  position: relative;
  width: 800px;
  height: 600px;
  background-color: hsl(26.53, 86.98%, 66.86%);
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
}
</style>
