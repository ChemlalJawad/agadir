<template>
  <div class="day-detail">
    <div class="day-header">
      <button @click="$router.go(-1)" class="back-btn">← Retour au programme</button>
      <div class="day-badge">Jour 3</div>
      <h1 class="day-title">Route vers Essaouira</h1>
      <p class="day-subtitle">Road trip vers la cité des vents</p>
    </div>

    <div class="content-sections">
      <div class="main-program">
        <h2>Programme principal</h2>
        <div class="schedule">
          <div class="time-slot">
            <div class="time">08:30</div>
            <div class="activity">
              <h3>🧳 Départ d'Agadir</h3>
              <p>Check-out et départ vers Essaouira. Route côtière spectaculaire de 180km (3h) avec arrêts panoramiques.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">10:00</div>
            <div class="activity">
              <h3>🐐 Arrêt aux chèvres d'arganiers</h3>
              <p>Arrêt photo mythique pour voir les chèvres perchées dans les arbres d'argan. Visite d'une coopérative féminine.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">12:00</div>
            <div class="activity">
              <h3>🏨 Installation à Essaouira</h3>
              <p>Arrivée et installation dans un riad traditionnel au cœur de la médina fortifiée.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">14:00</div>
            <div class="activity">
              <h3>🏖️ Première balade sur la plage</h3>
              <p>Découverte de la grande plage d'Essaouira, ses dromadaires et l'ambiance décontractée de la ville.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">17:00</div>
            <div class="activity">
              <h3>⛵ Visite du port et des remparts</h3>
              <p>Exploration du port de pêche traditionnel et des remparts portugais classés UNESCO.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">19:30</div>
            <div class="activity">
              <h3>🐟 Dîner de poissons grillés</h3>
              <p>Repas de sardines et dorades fraîches grillées directement sur le port dans une ambiance authentique.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="alternatives">
        <h2>Alternatives et suggestions</h2>
        <div class="alt-grid">
          <div class="alt-card">
            <h3>🏄‍♂️ Cours de windsurf</h3>
            <p>Essaouira est LA destination windsurf du Maroc. Première leçon avec les vents alizés parfaits.</p>
            <span class="difficulty hard">Sportif</span>
          </div>
          <div class="alt-card">
            <h3>🎵 Balade musicale</h3>
            <p>Découverte des cafés gnawa et de la musique traditionnelle souiri dans les ruelles de la médina.</p>
            <span class="difficulty easy">Culturel</span>
          </div>
          <div class="alt-card">
            <h3>🐪 Balade à dos de chameau</h3>
            <p>Session photos de groupe sur la grande plage d'Essaouira avec les dromadaires et l'ambiance décontractée de la ville.</p>
            <span class="difficulty easy">Facile</span>
          </div>
          <div class="alt-card">
            <h3>🧘‍♀️ Yoga sur la plage</h3>
            <p>Séance de yoga face à l'océan Atlantique pour se reconnecter après le voyage.</p>
            <span class="difficulty easy">Zen</span>
          </div>
        </div>
      </div>

      <div class="practical-info">
        <h2>Informations pratiques</h2>
        <div class="info-grid">
          <div class="info-item">
            <h4>🌊 Marées</h4>
            <p>Vérifier les horaires de marées pour les activités nautiques</p>
          </div>
          <div class="info-item">
            <h4>💨 Vents</h4>
            <p>Vents forts l'après-midi, parfaits pour le kite mais prévoir veste</p>
          </div>
          <div class="info-item">
            <h4>🛍️ Shopping</h4>
            <p>Artisanat local : marqueterie de thuya, bijoux berbères</p>
          </div>
          <div class="info-item">
            <h4>📱 WiFi</h4>
            <p>Connexion disponible dans la plupart des cafés de la médina</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page détaillée du Jour 3
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

.day-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.day-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
}

.back-btn {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(-3px);
}

.day-badge {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.day-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.day-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.content-sections {
  display: grid;
  gap: 3rem;
}

.main-program, .alternatives, .practical-info {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.main-program h2, .alternatives h2, .practical-info h2 {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.schedule {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.time-slot {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 2rem;
  align-items: start;
}

.time {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.75rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
}

.activity {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.activity h3 {
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.activity p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.alt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.alt-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  position: relative;
}

.alt-card:hover {
  transform: translateY(-3px);
}

.alt-card h3 {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.alt-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.difficulty {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.difficulty.easy {
  background: rgba(34, 197, 94, 0.3);
  color: rgb(34, 197, 94);
}

.difficulty.medium {
  background: rgba(251, 191, 36, 0.3);
  color: rgb(251, 191, 36);
}

.difficulty.hard {
  background: rgba(239, 68, 68, 0.3);
  color: rgb(239, 68, 68);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.info-item h4 {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.info-item p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .day-detail {
    padding: 1rem;
  }
  
  .day-title {
    font-size: 2rem;
  }
  
  .time-slot {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .back-btn {
    position: static;
    margin-bottom: 1rem;
  }
  
  .alt-grid, .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
