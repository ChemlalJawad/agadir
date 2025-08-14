<template>
  <div class="day-detail">
    <div class="day-header">
      <button @click="$router.go(-1)" class="back-btn">← Retour au programme</button>
      <div class="day-badge">Jour 6</div>
      <h1 class="day-title">Marrakech Magique</h1>
      <p class="day-subtitle">Immersion totale dans la médina avec les potes</p>
    </div>

    <div class="content-sections">
      <div class="main-program">
        <h2>Programme principal</h2>
        <div class="schedule">
          <div class="time-slot">
            <div class="time">08:30</div>
            <div class="activity">
              <h3>🕌 Médina historique</h3>
              <p>Exploration guidée de la médina millénaire avec ses ruelles labyrinthiques, palais cachés et fontaines secrètes.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">10:30</div>
            <div class="activity">
              <h3>🛍️ Souks traditionnels</h3>
              <p>Immersion totale dans les souks : épices, tapis, babouches, lanternes... Apprentissage du marchandage avec guide local.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">14:00</div>
            <div class="activity">
              <h3>🏰 Palais de la Bahia</h3>
              <p>Visite du somptueux palais du 19ème siècle avec ses jardins, mosaïques et architecture mauresque raffinée.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">16:00</div>
            <div class="activity">
              <h3>🏛️ Tombeaux Saadiens</h3>
              <p>Découverte de ces merveilles architecturales redécouvertes en 1917, témoins de l'art décoratif marocain.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">18:00</div>
            <div class="activity">
              <h3>🎭 Place Jemaa el-Fna</h3>
              <p>Soirée magique sur la place : charmeurs de serpents, conteurs, musiciens gnawa et ambiance unique au monde.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">20:30</div>
            <div class="activity">
              <h3>🍽️ Festin traditionnel</h3>
              <p>Dîner sur une terrasse avec vue sur la place illuminée. Tajines, couscous et pâtisseries au miel.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="alternatives">
        <h2>Alternatives et suggestions</h2>
        <div class="alt-grid">
          <div class="alt-card">
            <h3>🍵 Atelier cuisine</h3>
            <p>Cours de cuisine marocaine dans un riad : préparation de tajines, couscous et pâtisseries traditionnelles.</p>
            <span class="difficulty medium">Créatif</span>
          </div>
          <div class="alt-card">
            <h3>🎮 Escape game Marrakech</h3>
            <p>Escape game thématique dans la médina ! Mission en équipe pour résoudre des énigmes et découvrir les secrets de Marrakech.</p>
            <span class="difficulty medium">Team building</span>
          </div>
          <div class="alt-card">
            <h3>🏃‍♂️ Course dans l'Atlas</h3>
            <p>Excursion d'une journée dans les montagnes de l'Atlas avec randonnée et déjeuner chez l'habitant berbère.</p>
            <span class="difficulty hard">Sportif</span>
          </div>
          <div class="alt-card">
            <h3>🎨 Atelier artisanat</h3>
            <p>Initiation à la poterie, tannage du cuir ou tissage dans les ateliers traditionnels de la médina.</p>
            <span class="difficulty medium">Artisanal</span>
          </div>
        </div>
      </div>

      <div class="practical-info">
        <h2>Informations pratiques</h2>
        <div class="info-grid">
          <div class="info-item">
            <h4>🕌 Dress code</h4>
            <p>Tenues respectueuses dans les lieux saints, épaules couvertes</p>
          </div>
          <div class="info-item">
            <h4>💰 Marchandage</h4>
            <p>Diviser par 3-4 le prix initial, négocier avec le sourire</p>
          </div>
          <div class="info-item">
            <h4>📱 Guides</h4>
            <p>Guides officiels recommandés, badge visible obligatoire</p>
          </div>
          <div class="info-item">
            <h4>🚰 Hydratation</h4>
            <p>Boire beaucoup d'eau, éviter glaçons dans rue</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page détaillée du Jour 6
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
