<template>
  <div class="day-detail">
    <div class="day-header">
      <button @click="$router.go(-1)" class="back-btn">← Retour au programme</button>
      <div class="day-badge">Jour 7</div>
      <h1 class="day-title">Derniers Moments</h1>
      <p class="day-subtitle">Dernières aventures avant le retour</p>
    </div>

    <div class="content-sections">
      <div class="main-program">
        <h2>Programme principal</h2>
        <div class="schedule">
          <div class="time-slot">
            <div class="time">09:00</div>
            <div class="activity">
              <h3>🐪 Aventure dans la palmeraie</h3>
              <p>Balade épique entre potes dans la palmeraie : à dos de dromadaire pour l'expérience authentique ou à cheval pour les plus sportifs ! Photos de ouf garanties dans les palmiers centenaires.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">11:00</div>
            <div class="activity">
              <h3>🛍️ Shopping derniers souvenirs</h3>
              <p>Temps libre pour les achats de dernière minute : épices, huile d'argan, artisanat dans les meilleurs endroits.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">13:00</div>
            <div class="activity">
              <h3>🍽️ Déjeuner d'adieu</h3>
              <p>Repas traditionnel dans un restaurant avec terrasse panoramique sur la médina et les montagnes de l'Atlas.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">15:00</div>
            <div class="activity">
              <h3>🧳 Préparatifs départ</h3>
              <p>Check-out de l'hôtel, récupération des bagages et préparation pour le transfert vers l'aéroport.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">17:00</div>
            <div class="activity">
              <h3>✈️ Transfer aéroport</h3>
              <p>Route vers l'aéroport Marrakech-Menara (20 min) et vol retour avec des souvenirs plein la tête.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="alternatives">
        <h2>Alternatives et suggestions</h2>
        <div class="alt-grid">
          <div class="alt-card">
            <h3>🌿 Jardin secret</h3>
            <p>Visite du Jardin Secret, oasis cachée au cœur de la médina avec architecture islamique et andalouse.</p>
            <span class="difficulty easy">Paisible</span>
          </div>
          <div class="alt-card">
            <h3>☕ Café des Épices</h3>
            <p>Moment détente sur une terrasse avec vue sur les souks pour siroter un thé à la menthe et observer l'animation.</p>
            <span class="difficulty easy">Relaxant</span>
          </div>
          <div class="alt-card">
            <h3>� Karting Marrakech</h3>
            <p>Session karting entre potes sur circuit professionnel ! Parfait pour une compétition amicale avant le départ.</p>
            <span class="difficulty medium">Fun</span>
          </div>
          <div class="alt-card">
            <h3>� Équitation groupe</h3>
            <p>Cours d'équitation collectif dans un centre équestre avec balade en groupe dans l'Atlas. Parfait pour rigoler entre potes !</p>
            <span class="difficulty medium">Sportif</span>
          </div>
        </div>
      </div>

      <div class="practical-info">
        <h2>Informations pratiques</h2>
        <div class="info-grid">
          <div class="info-item">
            <h4>✈️ Vol retour</h4>
            <p>Arrivée aéroport 2h avant vol international</p>
          </div>
          <div class="info-item">
            <h4>🧳 Bagages</h4>
            <p>Attention poids avec achats, prévoir place</p>
          </div>
          <div class="info-item">
            <h4>🎁 Souvenirs</h4>
            <p>Épices sous vide, huile d'argan certifiée, artisanat</p>
          </div>
          <div class="info-item">
            <h4>📱 Contacts</h4>
            <p>Noter contacts locaux pour futurs voyages</p>
          </div>
        </div>
      </div>

      <div class="memories-section">
        <h2>🌟 Récapitulatif de votre aventure</h2>
        <div class="memory-grid">
          <div class="memory-card">
            <h4>🏖️ Agadir</h4>
            <p>Plages dorées, Vallée du Paradis, Kasbah panoramique</p>
          </div>
          <div class="memory-card">
            <h4>🌊 Essaouira</h4>
            <p>Vents atlantiques, médina fortifiée, art et kitesurf</p>
          </div>
          <div class="memory-card">
            <h4>🕌 Marrakech</h4>
            <p>Médina millénaire, Jemaa el-Fna, jardins somptueux</p>
          </div>
        </div>
        <p class="farewell">🇲🇦 Merci pour cette aventure marocaine de ouf entre potes ! À bientôt pour de nouvelles aventures épiques !</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page détaillée du Jour 7
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

.main-program, .alternatives, .practical-info, .memories-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.main-program h2, .alternatives h2, .practical-info h2, .memories-section h2 {
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

.memory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.memory-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.memory-card h4 {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.memory-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
}

.farewell {
  text-align: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
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
  
  .alt-grid, .info-grid, .memory-grid {
    grid-template-columns: 1fr;
  }
}
</style>
