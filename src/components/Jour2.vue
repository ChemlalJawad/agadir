<template>
  <div class="day-detail">
    <div class="day-header">
      <BaseButton @click="$router.go(-1)" variant="secondary" class="back-btn"><ArrowLeft :size="16" aria-hidden="true" />Retour au programme</BaseButton>
      <StatusBadge variant="info" :icon="Calendar">Jour 2</StatusBadge>
      <h1 class="day-title">Exploration d'Agadir</h1>
      <p class="day-subtitle">On explore la ville et ses spots de ouf</p>
    </div>

    <div class="content-sections">
      <div class="main-program">
        <h2>Programme principal</h2>
        <div class="schedule">
          <div class="time-slot">
            <div class="time">08:00</div>
            <div class="activity">
              <h3>🌅 Petit-déjeuner berbère</h3>
              <p>Réveil en douceur avec un petit-déjeuner traditionnel : thé à la menthe, pain msemen, miel local et huile d'argan.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">09:30</div>
            <div class="activity">
              <h3>🏞️ Excursion Vallée du Paradis</h3>
              <p>Départ pour cette oasis naturelle à 60km d'Agadir. Randonnée facile, piscines naturelles et cascades dans un cadre exceptionnel.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">14:00</div>
            <div class="activity">
              <h3>🍽️ Déjeuner au cœur de la vallée</h3>
              <p>Repas traditionnel dans un restaurant local avec vue sur les montagnes et les palmiers.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">16:30</div>
            <div class="activity">
              <h3>🛍️ Souk El Had</h3>
              <p>Découverte du plus grand marché de la région. Épices, artisanat, huile d'argan... Initiation au marchandage !</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">19:00</div>
            <div class="activity">
              <h3>🏰 Coucher de soleil à la Kasbah</h3>
              <p>Montée à la Kasbah d'Agadir Oufella pour un panorama époustouflant sur la baie au coucher du soleil.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="alternatives">
        <h2>Alternatives et suggestions</h2>
        <div class="alt-grid">
          <div class="alt-card">
            <h3>🏖️ Journée plage détente</h3>
            <p>Alternative relaxante : journée complète à la plage avec massage argan et sports nautiques.</p>
            <StatusBadge variant="success" :icon="CircleDot">Facile</StatusBadge>
          </div>
          <div class="alt-card">
            <h3>🐪 Safari en quad</h3>
            <p>Excursion en quad dans les dunes et villages berbères environnants. Aventure et adrénaline garanties !</p>
            <StatusBadge variant="danger" :icon="CircleDot">Sportif</StatusBadge>
          </div>
          <div class="alt-card">
            <h3>🎣 Sortie pêche en mer</h3>
            <p>Embarquez avec les pêcheurs locaux pour une matinée en mer. Poisson grillé sur la plage au retour.</p>
            <StatusBadge variant="warning" :icon="CircleDot">Modéré</StatusBadge>
          </div>
          <div class="alt-card">
            <h3>🏛️ Musée et patrimoine</h3>
            <p>Visite du Musée du Patrimoine Amazigh et découverte de l'histoire berbère de la région.</p>
            <StatusBadge variant="success" :icon="CircleDot">Culturel</StatusBadge>
          </div>
        </div>
      </div>

      <div class="practical-info">
        <h2>Informations pratiques</h2>
        <div class="info-grid">
          <div class="info-item">
            <h4>🚗 Transport</h4>
            <p>Minibus climatisé pour la Vallée du Paradis (1h30 de route)</p>
          </div>
          <div class="info-item">
            <h4>👟 Équipement</h4>
            <p>Chaussures de marche, maillot, serviette pour la baignade</p>
          </div>
          <div class="info-item">
            <h4>💰 Budget</h4>
            <p>70-100€ excursion + souvenirs au souk</p>
          </div>
          <div class="info-item">
            <h4>📸 À photographier</h4>
            <p>Cascades, panorama kasbah, épices colorées du souk</p>
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
// Page détaillée du Jour 2
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
