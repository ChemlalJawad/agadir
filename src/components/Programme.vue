<template>
  <div class="programme-container">
    <div class="hero-section">
      <h1 class="hero-title">Itinéraire entre Agadir, Essaouira et Marrakech</h1>
      <p class="hero-subtitle">7 jours de découvertes • Octobre 2025</p>
    </div>
    
    <div class="timeline" role="list">
      <article class="timeline-item" v-for="(day, index) in days" :key="index" role="listitem">
        <div class="timeline-dot" aria-label="Jour {{ index + 1 }}">{{ index + 1 }}</div>
        <div
          class="timeline-content"
          @click="navigateToDay(index + 1)"
          @keydown.enter="navigateToDay(index + 1)"
          @keydown.space.prevent="navigateToDay(index + 1)"
          tabindex="0"
          role="button"
          :aria-label="`Voir les détails du ${day.title}`"
        >
          <h3 class="day-title">{{ day.title }}</h3>
          <p class="day-description">{{ day.description }}</p>
          <div class="day-highlights" role="list">
            <span class="highlight" v-for="highlight in day.highlights" :key="highlight" role="listitem">
              {{ highlight }}
            </span>
          </div>
          <div class="day-action">
            <span class="view-details" aria-hidden="true">Voir les détails</span>
          </div>
        </div>
      </article>
    </div>
    
    <div class="journey-summary">
      <h2>Votre parcours au Maroc</h2>
      <p>Un itinéraire équilibré entre littoral, patrimoine et moments de détente. De l'arrivée à Agadir aux dernières activités à Marrakech, découvrez les incontournables du Sud marocain dans une expérience conviviale.</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToDay = (dayNumber) => {
  router.push(`/jour${dayNumber}`)
}

const days = [
  {
    title: "Jour 1 - Arrivée à Agadir",
    description: "Arrivée et installation en douceur",
    highlights: ['Plage', 'Corniche', 'Dîner en bord de mer']
  },
  {
    title: "Jour 2 - Agadir exploration",
    description: "Découverte des points forts d'Agadir",
    highlights: ['Vallée du Paradis', 'Souk El Had', 'Kasbah']
  },
  {
    title: "Jour 3 - Route vers Essaouira",
    description: "Trajet côtier vers la cité des vents",
    highlights: ['Spots de surf', 'Port historique', 'Remparts']
  },
  {
    title: "Jour 4 - Essaouira authentique",
    description: "Journée entre mer, art et gastronomie",
    highlights: ['Galeries', 'Fruits de mer', 'Kitesurf']
  },
  {
    title: "Jour 5 - Vers Marrakech",
    description: "Transfert vers la ville rouge",
    highlights: ['Jardin Majorelle', 'Musée YSL', 'Installation']
  },
  {
    title: "Jour 6 - Marrakech magique",
    description: "Immersion dans la médina de Marrakech",
    highlights: ['Médina', 'Souks', 'Jemaa el-Fna']
  },
  {
    title: "Jour 7 - Derniers délires",
    description: "Dernières expériences avant le retour",
    highlights: ['Balade', 'Karting', 'Départ']
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

.programme-container {
  max-width: 1000px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #34495e, #2c3e50, #34495e);
  border-radius: 2px;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #34495e, #2c3e50);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  transform: translateX(-50%);
  box-shadow: 0 8px 25px rgba(44, 62, 80, 0.4);
  border: 4px solid rgba(255, 255, 255, 0.9);
  z-index: 10;
}

.timeline-content {
  width: 40%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin: 0 5%;
}

.timeline-content:hover,
.timeline-content:focus {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  outline: none;
}

.timeline-content:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.8);
  outline-offset: 3px;
}

.day-action {
  margin-top: 1rem;
  text-align: center;
}

.view-details {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.timeline-content:hover .view-details {
  color: white;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-right: 5%;
  margin-left: auto;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: 5%;
  margin-right: auto;
}

.day-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.day-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.day-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.highlight {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.journey-summary {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.journey-summary h2 {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}

.journey-summary p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .timeline::before {
    left: 30px;
  }
  
  .timeline-dot {
    left: 30px;
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
  
  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 80px;
  }
  
  .timeline-item:nth-child(even) {
    flex-direction: column;
  }
  
  .timeline-content {
    width: 100%;
    margin: 0;
  }
  
  .timeline-item:nth-child(even) .timeline-content,
  .timeline-item:nth-child(odd) .timeline-content {
    margin: 0;
  }
}
</style>
