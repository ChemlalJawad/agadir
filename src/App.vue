<script setup>
import { CalendarDays, Compass, Landmark, Map, Plane } from 'lucide-vue-next'
import ErrorBoundary from './components/ErrorBoundary.vue'

const navigationItems = [
  { to: '/', label: 'Itinéraire', icon: Map, ariaLabel: "Voir l'itinéraire du voyage" },
  { to: '/calendrier', label: 'Planning', icon: CalendarDays, ariaLabel: 'Consulter le planning' },
  { to: '/agadir', label: 'Agadir', icon: Compass, ariaLabel: 'Découvrir Agadir' },
  { to: '/essaouira', label: 'Essaouira', icon: Plane, ariaLabel: 'Découvrir Essaouira' },
  { to: '/marrakech', label: 'Marrakech', icon: Landmark, ariaLabel: 'Découvrir Marrakech' }
]
</script>

<template>
  <div class="app-container">
    <div class="hero-background"></div>
    <header class="main-header" role="banner">
      <h1 class="brand-title">
        <Plane :size="28" aria-hidden="true" />
        Morocco Explorer
      </h1>
      <nav class="modern-nav" role="navigation" aria-label="Navigation principale">
        <router-link
          v-for="item in navigationItems"
          :key="item.to"
          :to="item.to"
          class="nav-item"
          :aria-label="item.ariaLabel"
        >
          <component :is="item.icon" class="nav-icon" :size="20" aria-hidden="true" />
          <span>{{ item.label }}</span>
        </router-link>
      </nav>
    </header>
    <main class="main-content" role="main">
      <ErrorBoundary>
        <router-view />
      </ErrorBoundary>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  font-family: var(--font-family-body);
  position: relative;
  overflow-x: hidden;
}

.hero-background { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%); z-index: -1; }
.main-header { backdrop-filter: blur(20px); background: rgba(255, 255, 255, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.2); padding: 1.5rem 2rem; position: sticky; top: 0; z-index: 1000; }
.brand-title { color: white; font-size: var(--font-size-3xl); font-weight: 800; display: flex; justify-content: center; align-items: center; gap: 0.6rem; margin-bottom: 1.5rem; text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3); letter-spacing: var(--letter-spacing-tight); }
.modern-nav { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
.nav-item { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 0.85rem 1.2rem; color: white; font-weight: 600; font-size: var(--font-size-sm); background: rgba(255, 255, 255, 0.1); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.2); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); backdrop-filter: blur(10px); text-transform: uppercase; letter-spacing: var(--letter-spacing-wide); }
.nav-item:hover, .nav-item:focus { transform: translateY(-3px) scale(1.03); background: rgba(255, 255, 255, 0.2); box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); outline: none; }
.nav-item:focus-visible { outline: 3px solid rgba(255, 255, 255, 0.8); outline-offset: 3px; }
.nav-item.router-link-exact-active { background: rgba(255, 255, 255, 0.3); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); }
.nav-icon { filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3)); }
.main-content { padding: 3rem 2rem; max-width: 1200px; margin: 0 auto; }
@media (max-width: 768px) {
  .main-header { padding: 1rem; }
  .brand-title { font-size: var(--font-size-2xl); margin-bottom: 1rem; }
  .modern-nav { gap: 0.5rem; }
  .nav-item { padding: 0.7rem 0.9rem; font-size: var(--font-size-xs); }
  .main-content { padding: 2rem 1rem; }
}
</style>
