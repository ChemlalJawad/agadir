<template>
  <button :type="type" :class="['base-button', `base-button--${variant}`]" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  type: {
    type: String,
    default: 'button'
  }
})
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: var(--font-size-sm);
  border: 1px solid transparent;
  transition: all 0.25s ease;
}

.base-button:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.8);
  outline-offset: 3px;
}

.base-button--primary {
  background: linear-gradient(135deg, #34495e, #2c3e50);
  color: white;
  box-shadow: 0 8px 25px rgba(44, 62, 80, 0.35);
}

.base-button--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(44, 62, 80, 0.45);
}

.base-button--secondary {
  background: rgba(255, 255, 255, 0.14);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.base-button--secondary:hover {
  background: rgba(255, 255, 255, 0.24);
}

.base-button--ghost {
  background: transparent;
  color: rgba(255, 255, 255, 0.92);
  border-color: rgba(255, 255, 255, 0.25);
}

.base-button--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}
</style>
