<template>
  <div class="city-showcase">
    <div class="city-hero">
      <div class="city-icon">🏖️</div>
      <h1 class="city-title">Agadir</h1>
      <p class="city-tagline">La perle du Sud marocain</p>
    </div>
    
    <div class="content-grid">
      <div class="content-card activities">
        <h3 class="card-title">
          <span class="card-icon">🎯</span>
          Activités incontournables
        </h3>
        <div class="activity-list">
          <div class="activity-item">
            <span class="activity-emoji">🏄‍♂️</span>
            <span>Surf et détente sur la plage</span>
          </div>
          <div class="activity-item">
            <span class="activity-emoji">🛍️</span>
            <span>Shopping au Souk El Had</span>
          </div>
          <div class="activity-item">
            <span class="activity-emoji">🏞️</span>
            <span>Excursion Vallée du Paradis</span>
          </div>
          <div class="activity-item">
            <span class="activity-emoji">🌅</span>
            <span>Promenade sur la Corniche</span>
          </div>
          <div class="activity-item">
            <span class="activity-emoji">⛵</span>
            <span>Découverte du port de pêche</span>
          </div>
        </div>
      </div>

      <div class="content-card locations">
        <h3 class="card-title">
          <span class="card-icon">📍</span>
          Lieux à visiter
        </h3>
        <div class="location-list">
          <div class="location-item">
            <span class="location-emoji">🏰</span>
            <div>
              <div class="location-name">Kasbah d'Agadir Oufella</div>
              <div class="location-desc">Vue panoramique exceptionnelle</div>
            </div>
          </div>
          <div class="location-item">
            <span class="location-emoji">🌺</span>
            <div>
              <div class="location-name">Jardin de Olhao</div>
              <div class="location-desc">Oasis de verdure en ville</div>
            </div>
          </div>
          <div class="location-item">
            <span class="location-emoji">🏛️</span>
            <div>
              <div class="location-name">Musée du Patrimoine Amazigh</div>
              <div class="location-desc">Culture berbère authentique</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ...existing code...
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

.city-showcase {
  max-width: 1000px;
  margin: 0 auto;
}

.city-hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.city-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3));
}

.city-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
}

.city-tagline {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.content-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
}

.card-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.card-icon {
  font-size: 1.5rem;
}

.activity-list, .location-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
}

.activity-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

.activity-emoji {
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

.location-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.location-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

.location-emoji {
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

.location-name {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.location-desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

@media (max-width: 768px) {
  .city-title {
    font-size: 2rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .city-hero {
    padding: 2rem 1rem;
  }
  
  .content-card {
    padding: 1.5rem;
  }
}
</style>
