<template>
  <div class="page">
    <section class="glass hero">
      <h1>Tokyo Ops — 6 jours intenses</h1>
      <p>Tokyo sert de base d'acclimatation + exploration urbaine avant les segments route et campagne.</p>
    </section>

    <section class="days-grid">
      <article v-for="(day, index) in days" :key="day.title" class="glass day-card" :style="{ animationDelay: `${index * 70}ms` }">
        <h3>{{ day.title }}</h3>
        <p>{{ day.goal }}</p>
        <ul>
          <li v-for="item in day.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script setup>
const days = [
  { title: 'Jour 1 — Arrivée + skyline', goal: 'Démarrage léger pour absorber le jetlag.', items: ['Shibuya Crossing sunset', 'Shibuya Sky', 'Dîner Center Gai'] },
  { title: 'Jour 2 — Harajuku + vintage luxe', goal: 'Mix spiritualité + shopping ciblé.', items: ['Meiji Jingu', 'Takeshita Street', 'Amore, Ragtag, Komehyo, Brand Collect'] },
  { title: 'Jour 3 — Pop culture', goal: 'Bloc culture geek concentré.', items: ['Akihabara', 'Nakano Broadway', 'Golden Gai'] },
  { title: 'Jour 4 — Créatif + street', goal: 'Journée expérientielle.', items: ['Atelier bagues', 'Shimokitazawa', 'Omoide Yokocho + karting'] },
  { title: 'Jour 5 — Ghibli day', goal: 'Journée détente avant Nikko.', items: ['Musée Ghibli (réserver 2 mois avant)', 'Inokashira', 'Roppongi ou Azabudai Hills'] },
  { title: 'Jour 6 — Nikko', goal: 'Sortie nature/culture puis retour ville.', items: ['Sanctuaires sculptés', 'Forêt automnale', 'Retour Tokyo soir'] }
]
</script>

<style scoped>
.page { display: grid; gap: 1rem; color: white; }
.glass { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); border-radius: 18px; backdrop-filter: blur(14px); }
.hero { padding: 1.3rem; }
.days-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.8rem; }
.day-card { padding: 1rem; opacity: 0; animation: fadeIn 0.5s ease forwards; }
.day-card p { color: #c7d2fe; font-weight: 600; margin: 0.35rem 0 0.55rem; }
ul { padding-left: 1rem; display: grid; gap: 0.35rem; }
@keyframes fadeIn { from {opacity:0; transform: translateY(8px);} to {opacity:1; transform: translateY(0);} }
</style>
