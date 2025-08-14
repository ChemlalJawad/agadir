<script setup>
// ...existing code...
</script>

<template>
  <div class="app-container">
    <div class="hero-background"></div>
    <header class="main-header">
      <h1 class="brand-title">✈️ Morocco Explorer</h1>
      <nav class="modern-nav">
        <router-link to="/" class="nav-item">
          <span class="nav-icon">🗓️</span>
          <span>Programme</span>
        </router-link>
        <router-link to="/agadir" class="nav-item">
          <span class="nav-icon">🏖️</span>
          <span>Agadir</span>
        </router-link>
        <router-link to="/essaouira" class="nav-item">
          <span class="nav-icon">🌊</span>
          <span>Essaouira</span>
        </router-link>
        <router-link to="/marrakech" class="nav-item">
          <span class="nav-icon">🕌</span>
          <span>Marrakech</span>
        </router-link>
      </nav>
    </header>
    <main class="main-content">
      <router-view />
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  z-index: -1;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

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

.nav-item:hover {
  transform: translateY(-3px) scale(1.05);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
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
