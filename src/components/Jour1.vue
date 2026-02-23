<template>
  <div class="day-detail">
    <div class="day-header">
      <BaseButton @click="$router.go(-1)" variant="secondary" class="back-btn"><ArrowLeft :size="16" aria-hidden="true" />Retour au programme</BaseButton>
      <StatusBadge variant="info" :icon="Calendar">Jour 1</StatusBadge>
      <h1 class="day-title">Arrivée à Agadir</h1>
      <p class="day-subtitle">Débarquement de la team et première session détente</p>
    </div>

    <div class="content-sections">
      <div class="main-program">
        <h2>Programme principal</h2>
        <div class="schedule">
          <div class="time-slot">
            <div class="time">10:00</div>
            <div class="activity">
              <h3>✈️ Arrivée à l'aéroport Al Massira</h3>
              <p>Accueil de la team et transfert vers l'hôtel. Installation dans vos chambres avec vue sur l'océan et première session wifi pour prévenir que vous êtes bien arrivés !</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">14:00</div>
            <div class="activity">
              <h3>🍽️ Déjeuner de bienvenue</h3>
              <p>Premier repas traditionnel marocain en terrasse face à la mer. Découverte des saveurs locales et première session photos de groupe !</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">16:00</div>
            <div class="activity">
              <h3>🏖️ Première découverte de la plage</h3>
              <p>Session détente sur la plage d'Agadir avec la team ! Parfait pour décompresser après le voyage et tester l'eau de l'Atlantique.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">18:00</div>
            <div class="activity">
              <h3>🌅 Promenade sur la Corniche</h3>
              <p>Exploration de la célèbre promenade en bord de mer avec ses cafés, restaurants et vue panoramique. Parfait pour se balader entre potes !</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">20:00</div>
            <div class="activity">
              <h3>🐟 Dîner au port de pêche</h3>
              <p>Premier repas de poissons frais avec la team dans l'ambiance authentique du port. Spectacle des pêcheurs au retour et première soirée marocaine !</p>
            </div>
          </div>
        </div>
      </div>

      <div class="alternatives">
        <h2>Alternatives et suggestions</h2>
        <div class="alt-grid">
          <div class="alt-card">
            <h3>🏨 Repos à l'hôtel</h3>
            <p>Si vous êtes fatigués du voyage, profitez des équipements de l'hôtel : piscine, spa, ou simplement repos en chambre.</p>
            <StatusBadge variant="success" :icon="CircleDot">Facile</StatusBadge>
          </div>
          <div class="alt-card">
            <h3>🛍️ Shopping moderne</h3>
            <p>Visite du centre commercial Al Mazar ou Marina d'Agadir pour du shopping contemporain et climatisé.</p>
            <StatusBadge variant="warning" :icon="CircleDot">Modéré</StatusBadge>
          </div>
          <div class="alt-card">
            <h3>🏄‍♂️ École de surf</h3>
            <p>Première leçon de surf avec un moniteur local. Les vagues d'Agadir sont parfaites pour débuter.</p>
            <StatusBadge variant="danger" :icon="CircleDot">Sportif</StatusBadge>
          </div>
          <div class="alt-card">
            <h3>🌿 Jardin Ibn Zaidoun</h3>
            <p>Balade paisible dans ce jardin botanique avec vue sur la ville et la baie d'Agadir.</p>
            <StatusBadge variant="success" :icon="CircleDot">Facile</StatusBadge>
          </div>
        </div>
      </div>

      <div class="practical-info">
        <h2>Informations pratiques</h2>
        <div class="info-grid">
          <div class="info-item">
            <h4>🌡️ Météo</h4>
            <p>Octobre : 22-28°C, parfait pour les activités extérieures</p>
          </div>
          <div class="info-item">
            <h4>💰 Budget estimé</h4>
            <p>50-80€ pour les repas et activités optionnelles</p>
          </div>
          <div class="info-item">
            <h4>👕 Tenue conseillée</h4>
            <p>Vêtements légers, crème solaire, maillot de bain</p>
          </div>
          <div class="info-item">
            <h4>📱 À ne pas oublier</h4>
            <p>Appareil photo, adaptateur prise européenne</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft, Calendar, CircleDot } from 'lucide-vue-next'
import BaseButton from './BaseButton.vue'
import StatusBadge from './StatusBadge.vue'
// Page détaillée du Jour 1
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
