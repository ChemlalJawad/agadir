<template>
  <div class="day-detail">
    <div class="day-header">
      <BaseButton @click="$router.go(-1)" variant="secondary" class="back-btn"><ArrowLeft :size="16" aria-hidden="true" />Retour au programme</BaseButton>
      <StatusBadge variant="info" :icon="Calendar">Jour 5</StatusBadge>
      <h1 class="day-title">Vers Marrakech</h1>
      <p class="day-subtitle">Direction la ville rouge pour l'aventure</p>
    </div>

    <div class="content-sections">
      <div class="main-program">
        <h2>Programme principal</h2>
        <div class="schedule">
          <div class="time-slot">
            <div class="time">09:00</div>
            <div class="activity">
              <h3>🧳 Départ d'Essaouira</h3>
              <p>Check-out et route vers Marrakech (170km, 2h30) à travers les paysages de l'arrière-pays marocain.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">12:00</div>
            <div class="activity">
              <h3>🏨 Installation à Marrakech</h3>
              <p>Arrivée et installation dans un riad traditionnel au cœur de la médina ou hôtel moderne selon préférence.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">14:30</div>
            <div class="activity">
              <h3>🌿 Jardin Majorelle</h3>
              <p>Visite du célèbre jardin bleu Majorelle, oasis de paix créé par le peintre français Jacques Majorelle.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">16:30</div>
            <div class="activity">
              <h3>👗 Musée Yves Saint Laurent</h3>
              <p>Découverte du musée dédié au couturier français et de ses créations inspirées du Maroc.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">18:30</div>
            <div class="activity">
              <h3>🍃 Jardin Menara</h3>
              <p>Promenade paisible dans ce jardin historique avec vue sur l'Atlas et son bassin réfléchissant.</p>
            </div>
          </div>
          <div class="time-slot">
            <div class="time">20:00</div>
            <div class="activity">
              <h3>🍽️ Dîner dans un palais</h3>
              <p>Repas traditionnel dans un ancien palais avec spectacle de musique andalouse et danse du ventre.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="alternatives">
        <h2>Alternatives et suggestions</h2>
        <div class="alt-grid">
          <div class="alt-card">
            <h3>🛀 Hammam royal</h3>
            <p>Expérience authentique dans un hammam traditionnel avec gommage au savon noir et massage relaxant.</p>
            <StatusBadge variant="success" :icon="CircleDot">Détente</StatusBadge>
          </div>
          <div class="alt-card">
            <h3>🛍️ Gueliz moderne</h3>
            <p>Shopping dans le quartier moderne de Gueliz : centres commerciaux, boutiques et cafés contemporains.</p>
            <StatusBadge variant="success" :icon="CircleDot">Shopping</StatusBadge>
          </div>
          <div class="alt-card">
            <h3>🚁 Survol en hélicoptère</h3>
            <p>Vue aérienne époustouflante sur Marrakech, l'Atlas et la palmeraie. Expérience inoubliable !</p>
            <StatusBadge variant="warning" :icon="CircleDot">Luxe</StatusBadge>
          </div>
          <div class="alt-card">
            <h3>🧘‍♀️ Yoga et méditation</h3>
            <p>Séance de yoga dans un riad avec vue sur les toits de la médina pour se ressourcer.</p>
            <StatusBadge variant="success" :icon="CircleDot">Zen</StatusBadge>
          </div>
        </div>
      </div>

      <div class="practical-info">
        <h2>Informations pratiques</h2>
        <div class="info-grid">
          <div class="info-item">
            <h4>🏛️ Billets</h4>
            <p>Jardin Majorelle : 70 DH, Musée YSL : 100 DH</p>
          </div>
          <div class="info-item">
            <h4>📱 Applications</h4>
            <p>Careem/Uber disponibles, mais préférer les calèches</p>
          </div>
          <div class="info-item">
            <h4>💰 Change</h4>
            <p>Bureaux de change nombreux, éviter l'aéroport</p>
          </div>
          <div class="info-item">
            <h4>🌡️ Climat</h4>
            <p>Plus chaud qu'à Essaouira, prévoir vêtements légers</p>
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
// Page détaillée du Jour 5
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
