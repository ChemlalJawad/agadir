<template>
  <span :class="['status-badge', `status-badge--${variant}`]">
    <component :is="icon" v-if="icon" class="status-icon" :size="14" aria-hidden="true" />
    <span><slot /></span>
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  icon: {
    type: [Object, Function],
    default: null
  }
})
</script>

<style scoped>
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-radius: 999px;
  padding: 0.3rem 0.7rem;
  font-size: var(--font-size-xs);
  font-weight: 700;
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  border: 1px solid transparent;
}

.status-icon { opacity: 0.9; }

.status-badge--default {
  background: rgba(255, 255, 255, 0.18);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.status-badge--success { background: rgba(34, 197, 94, 0.2); color: #dcfce7; border-color: rgba(34, 197, 94, 0.6); }
.status-badge--warning { background: rgba(250, 204, 21, 0.2); color: #fef9c3; border-color: rgba(250, 204, 21, 0.5); }
.status-badge--danger { background: rgba(239, 68, 68, 0.2); color: #fee2e2; border-color: rgba(239, 68, 68, 0.5); }
.status-badge--info { background: rgba(59, 130, 246, 0.2); color: #dbeafe; border-color: rgba(59, 130, 246, 0.5); }
</style>
