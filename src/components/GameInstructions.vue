<template>
  <div class="instructions">
    <h1 class="title">CS Heroes 🚀</h1>
    <p>Use the ⬅️ and ➡️ arrow keys to move and &lt;Space&gt; to shoot.</p>
    <p class="start-text">When you're ready press &lt;Space&gt; to defend your Support Squad!</p>
    <p class="quote">No competitors were harmed in the making of this game!</p>
  </div>
</template>

<style scoped>
.instructions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
  font-size: 0.875rem;
}

.title {
  margin-bottom: 1.5rem;
}

.start-text {
  margin-top: 0.5rem;
}

.quote {
  margin-top: 2rem;
  font-size: 0.75rem;
  font-weight: bold;
}
</style>
