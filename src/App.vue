<script setup>
import ErrorBoundary from './components/ErrorBoundary.vue'
</script>

<template>
  <div class="app-container">
    <div class="aurora"></div>
    <div class="grain"></div>

    <header class="main-header" role="banner">
      <div class="header-inner">
        <h1 class="brand-title">🗾 Japan Travel Command Center</h1>
        <p class="brand-subtitle">Planifier, réserver et piloter ton itinéraire jour par jour</p>
        <nav class="modern-nav" role="navigation" aria-label="Navigation principale">
          <router-link to="/" class="nav-item">Programme</router-link>
          <router-link to="/calendrier" class="nav-item">Calendrier</router-link>
          <router-link to="/agadir" class="nav-item">Tokyo</router-link>
          <router-link to="/essaouira" class="nav-item">Fuji & Hakone</router-link>
          <router-link to="/marrakech" class="nav-item">Kansai & Extensions</router-link>
        </nav>
      </div>
    </header>

    <main class="main-content" role="main">
      <ErrorBoundary>
        <router-view />
      </ErrorBoundary>
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.app-container {
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  color: #fff;
  position: relative;
  overflow-x: hidden;
}

.aurora {
  position: fixed;
  inset: -20%;
  background:
    radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.35), transparent 35%),
    radial-gradient(circle at 80% 25%, rgba(236, 72, 153, 0.28), transparent 30%),
    radial-gradient(circle at 60% 80%, rgba(14, 165, 233, 0.25), transparent 30%),
    linear-gradient(135deg, #020617 0%, #0f172a 45%, #1e1b4b 100%);
  filter: blur(12px) saturate(120%);
  z-index: -2;
  animation: drift 18s ease-in-out infinite alternate;
}

.grain {
  position: fixed;
  inset: 0;
  z-index: -1;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 0.5px, transparent 0.5px);
  background-size: 3px 3px;
  opacity: 0.22;
  pointer-events: none;
}

.main-header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(2, 6, 23, 0.55);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem 1rem;
  text-align: center;
}

.brand-title { font-size: clamp(1.4rem, 2.3vw, 2.2rem); font-weight: 800; }
.brand-subtitle { margin-top: 0.4rem; opacity: 0.9; font-size: 0.95rem; }

.modern-nav {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: center;
}

.nav-item {
  text-decoration: none;
  color: #fff;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  transition: 220ms ease;
  font-weight: 600;
  font-size: 0.9rem;
}

.nav-item:hover { transform: translateY(-2px); background: rgba(255,255,255,0.18); }
.nav-item.router-link-exact-active { background: linear-gradient(135deg, #4f46e5, #ec4899); border-color: transparent; }

.main-content { max-width: 1200px; margin: 0 auto; padding: 2rem 1rem 3rem; }

@keyframes drift {
  from { transform: translateY(0) scale(1); }
  to { transform: translateY(-2%) scale(1.05); }
}
</style>
