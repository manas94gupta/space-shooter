<template>
  <div class="game-over">
    <h1 class="title">Game Over ☠️</h1>
    <p class="score">
      😇 Customer Satisfaction: <strong>{{ score }}</strong>
    </p>
    <p>
      💯 Peak Performance: <strong>{{ highestScore }}</strong>
    </p>
    <p class="start-text">Press &lt;Space&gt; to launch again</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    score: {
      type: Number as PropType<number>,
      required: true,
    },
    highestScore: {
      type: Number as PropType<number>,
      required: true,
    },
  },
})
</script>

<style scoped>
.game-over {
  color: white;
  text-align: center;
}

.title {
  margin-bottom: 1.5rem;
}

.score {
  margin-bottom: 0.25rem;
}

.start-text {
  margin-top: 1.25rem;
}
</style>
