<template>
  <div class="day-detail">
    <div class="day-header">
      <button @click="$router.go(-1)" class="back-btn">← Retour au programme</button>
      <div class="day-badge">Jour 4</div>
      <h1 class="day-title">Essaouira Authentique</h1>
      <p class="day-subtitle">Kitesurf, art et fruits de mer avec la team</p>
    </div>

    <div class="content-sections">
      <div class="main-program">
        <h2>Programme principal</h2>
        <div class="schedule">
          <div class="time-slot">
            <div class="time">09:00</div>
            <div class="activity">
              <h3>🕌 Médina fortifiée</h3>
              <p>Exploration complète de la médina d'Essaouira classée UNESCO. Architecture portugaise et berbère unique.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">11:00</div>
            <div class="activity">
              <h3>🎨 Galeries d'art locales</h3>
              <p>Visite des ateliers d'artistes et galeries. Essaouira est réputée pour sa scène artistique vibrante.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">14:00</div>
            <div class="activity">
              <h3>🛍️ Shopping artisanal</h3>
              <p>Découverte des coopératives de marqueterie de thuya, bijoux berbères et textiles traditionnels.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">16:30</div>
            <div class="activity">
              <h3>🦐 Dégustation fruits de mer</h3>
              <p>Expérience culinaire au marché aux poissons avec dégustation d'huîtres, crevettes et sardines fraîches.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">19:00</div>
            <div class="activity">
              <h3>🪁 Session kitesurf</h3>
              <p>Initiation ou perfectionnement au kitesurf sur la plage mythique d'Essaouira avec moniteur certifié.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="alternatives">
        <h2>Alternatives et suggestions</h2>
        <div class="alt-grid">
          <div class="alt-card">
            <h3>🎵 Festival gnawa</h3>
            <p>Découverte de la musique gnawa dans les cafés traditionnels et initiation aux instruments locaux.</p>
            <span class="difficulty easy">Culturel</span>
          </div>
          <div class="alt-card">
            <h3>🏇 Équitation sur plage</h3>
            <p>Session équitation de groupe sur la plage d'Essaouira au coucher du soleil, expérience épique entre potes !</p>
            <span class="difficulty medium">Modéré</span>
          </div>
          <div class="alt-card">
            <h3>🧘‍♀️ Retraite wellness</h3>
            <p>Journée spa et hammam traditionnel suivi d'un massage à l'huile d'argan dans un riad authentique.</p>
            <span class="difficulty easy">Détente</span>
          </div>
          <div class="alt-card">
            <h3>📸 Atelier photo</h3>
            <p>Cours de photographie dans les ruelles colorées de la médina avec un photographe professionnel local.</p>
            <span class="difficulty easy">Créatif</span>
          </div>
        </div>
      </div>

      <div class="practical-info">
        <h2>Informations pratiques</h2>
        <div class="info-grid">
          <div class="info-item">
            <h4>🎨 Ateliers</h4>
            <p>Réservation conseillée pour les ateliers d'artistes</p>
          </div>
          <div class="info-item">
            <h4>🌊 Conditions kite</h4>
            <p>Vents optimaux entre 14h-18h, force 4-5 Beaufort</p>
          </div>
          <div class="info-item">
            <h4>💰 Marchandage</h4>
            <p>Prix de départ divisé par 2-3 dans les souks</p>
          </div>
          <div class="info-item">
            <h4>🍽️ Spécialités</h4>
            <p>Pastilla de poisson, tajine aux fruits de mer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page détaillée du Jour 4
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
