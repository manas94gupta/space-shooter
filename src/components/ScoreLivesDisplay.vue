<template>
  <div class="score-lives-display">
    <div class="score-lives-left">
      <div>
        Customer Satisfaction: <strong>{{ score }}</strong>
      </div>
      <div>
        Peak Performance: <strong>{{ highestScore }}</strong>
      </div>
    </div>
    <div>
      Escalations Left:
      <span v-for="index in lives" :key="index"> ❤️ </span>
      <span v-for="index in 3 - lives" :key="index"> 🖤 </span>
      <!-- {{ lives }} -->
    </div>
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
    lives: {
      type: Number as PropType<number>,
      required: true,
    },
    gameStarted: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    gameOver: {
      type: Boolean as PropType<boolean>,
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
.score-lives-display {
  position: absolute;
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 10px;
  color: white;
  font-size: 14px;
}

.score-lives-left {
  display: flex;
  gap: 10px;
}
</style>
