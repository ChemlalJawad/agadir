<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <div class="error-code">404</div>
      <h1 class="error-title">Oups ! Page introuvable</h1>
      <p class="error-description">
        La page que vous cherchez semble s'être perdue dans le désert marocain... 🏜️
      </p>
      <div class="actions">
        <router-link to="/" class="home-button">
          🏠 Retour à l'accueil
        </router-link>
        <button @click="goBack" class="back-button">
          ← Page précédente
        </button>
      </div>
      <div class="suggestions">
        <h3>Suggestions de navigation :</h3>
        <div class="suggestion-links">
          <router-link to="/" class="suggestion-link">📋 Programme</router-link>
          <router-link to="/calendrier" class="suggestion-link">📅 Calendrier</router-link>
          <router-link to="/agadir" class="suggestion-link">🏖️ Agadir</router-link>
          <router-link to="/essaouira" class="suggestion-link">🌊 Essaouira</router-link>
          <router-link to="/marrakech" class="suggestion-link">🕌 Marrakech</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.not-found-container {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.not-found-content {
  text-align: center;
  max-width: 600px;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.5);
  line-height: 1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.error-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.home-button,
.back-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.home-button {
  background: linear-gradient(135deg, #34495e, #2c3e50);
  color: white;
  box-shadow: 0 8px 25px rgba(44, 62, 80, 0.4);
}

.home-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(44, 62, 80, 0.5);
}

.back-button {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.suggestions {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.suggestions h3 {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.suggestion-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.suggestion-link {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.suggestion-link:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .error-code {
    font-size: 5rem;
  }

  .error-title {
    font-size: 1.8rem;
  }

  .error-description {
    font-size: 1rem;
  }

  .actions {
    flex-direction: column;
  }

  .home-button,
  .back-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
