<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <div class="error-code">404</div>
      <h1 class="error-title">Page introuvable</h1>
      <p class="error-description">
        Cet itinéraire n'existe pas (ou plus) dans le Command Center Japon.
      </p>
      <div class="actions">
        <router-link to="/" class="home-button">🏠 Retour au programme</router-link>
        <button @click="goBack" class="back-button">← Page précédente</button>
      </div>
      <div class="suggestions">
        <h3>Sections utiles :</h3>
        <div class="suggestion-links">
          <router-link to="/" class="suggestion-link">🗓️ Programme</router-link>
          <router-link to="/calendrier" class="suggestion-link">📅 Calendrier</router-link>
          <router-link to="/agadir" class="suggestion-link">🌆 Tokyo</router-link>
          <router-link to="/essaouira" class="suggestion-link">🗻 Fuji & Hakone</router-link>
          <router-link to="/marrakech" class="suggestion-link">🏯 Kansai & Extensions</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.go(-1)
</script>

<style scoped>
.not-found-container { min-height: 60vh; display: flex; align-items: center; justify-content: center; color: white; }
.not-found-content { width: min(760px, 100%); text-align: center; padding: 2rem; background: rgba(255,255,255,0.1); border-radius: 20px; border: 1px solid rgba(255,255,255,0.25); }
.error-code { font-size: 4rem; font-weight: 800; }
.actions, .suggestion-links { display: flex; gap: 0.7rem; justify-content: center; flex-wrap: wrap; margin-top: 1rem; }
.home-button, .back-button, .suggestion-link { color: white; text-decoration: none; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); border-radius: 12px; padding: 0.6rem 0.9rem; }
.back-button { cursor: pointer; }
</style>
