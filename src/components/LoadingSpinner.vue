<template>
  <div class="loading-container" :class="{ 'full-page': fullPage }">
    <div class="spinner">
      <div class="spinner-ring"></div>
      <div class="spinner-ring"></div>
      <div class="spinner-ring"></div>
    </div>
    <p v-if="message" class="loading-message">{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'Chargement...'
  },
  fullPage: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
}

.loading-container.full-page {
  min-height: 60vh;
}

.spinner {
  position: relative;
  width: 60px;
  height: 60px;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.spinner-ring:nth-child(2) {
  width: 75%;
  height: 75%;
  top: 12.5%;
  left: 12.5%;
  animation-delay: 0.15s;
  border-top-color: rgba(255, 255, 255, 0.7);
}

.spinner-ring:nth-child(3) {
  width: 50%;
  height: 50%;
  top: 25%;
  left: 25%;
  animation-delay: 0.3s;
  border-top-color: rgba(255, 255, 255, 0.5);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-message {
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>
