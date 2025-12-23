<script setup>
import ErrorBoundary from './components/ErrorBoundary.vue'
</script>

<template>
  <div class="app-container">
    <div class="hero-background"></div>
    <header class="main-header" role="banner">
      <h1 class="brand-title">✈️ Morocco Explorer</h1>
      <nav class="modern-nav" role="navigation" aria-label="Navigation principale">
        <router-link to="/" class="nav-item" aria-label="Voir le programme du voyage">
          <span class="nav-icon" aria-hidden="true">🗓️</span>
          <span>Programme</span>
        </router-link>
        <router-link to="/calendrier" class="nav-item" aria-label="Consulter le calendrier">
          <span class="nav-icon" aria-hidden="true">📅</span>
          <span>Calendrier</span>
        </router-link>
        <router-link to="/agadir" class="nav-item" aria-label="Découvrir Agadir">
          <span class="nav-icon" aria-hidden="true">🏖️</span>
          <span>Agadir</span>
        </router-link>
        <router-link to="/essaouira" class="nav-item" aria-label="Découvrir Essaouira">
          <span class="nav-icon" aria-hidden="true">🌊</span>
          <span>Essaouira</span>
        </router-link>
        <router-link to="/marrakech" class="nav-item" aria-label="Découvrir Marrakech">
          <span class="nav-icon" aria-hidden="true">🕌</span>
          <span>Marrakech</span>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  overflow-x: hidden;
}

.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%);
  z-index: -1;
}

/* Suppression de l'animation gradient pour un design plus sobre */

.main-header {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.brand-title {
  color: white;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
}

.modern-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-item:hover,
.nav-item:focus {
  transform: translateY(-3px) scale(1.05);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  outline: none;
}

.nav-item:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.8);
  outline-offset: 3px;
}

.nav-item.router-link-exact-active {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.nav-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

.main-content {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .main-header {
    padding: 1rem;
  }
  
  .brand-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .modern-nav {
    gap: 0.5rem;
  }
  
  .nav-item {
    padding: 0.75rem 1rem;
    font-size: 0.8rem;
  }
  
  .main-content {
    padding: 2rem 1rem;
  }
}
</style>
