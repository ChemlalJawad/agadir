<template>
  <div class="page">
    <section class="glass hero">
      <h1>Fuji & Hakone — segment route intelligent</h1>
      <p>Bloc positionné juste après Tokyo pour relâcher le rythme et sécuriser les vues matinales sur le Fuji.</p>
    </section>

    <section class="glass table-wrap">
      <h2>Plan 3 jours</h2>
      <div class="plan-row" v-for="step in steps" :key="step.day">
        <strong>{{ step.day }}</strong>
        <span>{{ step.route }}</span>
        <em>{{ step.focus }}</em>
      </div>
    </section>

    <section class="check-grid">
      <article class="glass card">
        <h3>Pourquoi ce placement ?</h3>
        <ul>
          <li>Évite de finir le voyage avec trop de trajets longs.</li>
          <li>Permet une récupération physique avant Tohoku/Kyoto.</li>
          <li>Optimise les horaires photo tôt matin à Oshino Hakkai.</li>
        </ul>
      </article>
      <article class="glass card">
        <h3>Checklist exécution</h3>
        <ul>
          <li>Permis international validé.</li>
          <li>Ryokan onsen confirmé.</li>
          <li>Plan parking + péages.</li>
          <li>Alternative si Fuji couvert (musées + onsen).</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script setup>
const steps = [
  { day: 'J7', route: 'Tokyo → Kawaguchiko', focus: 'Ryokan onsen vue Fuji' },
  { day: 'J8', route: 'Kawaguchiko + Oshino Hakkai', focus: 'Lumière matin + routes secondaires' },
  { day: 'J9', route: 'Hakone', focus: 'Open Air Museum + ropeway + onsen' }
]
</script>

<style scoped>
.page { display: grid; gap: 1rem; color: white; }
.glass { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); border-radius: 18px; backdrop-filter: blur(14px); }
.hero,.table-wrap,.card { padding: 1rem 1.2rem; }
.plan-row { display: grid; grid-template-columns: 70px 1fr 1fr; gap: 0.7rem; padding: 0.55rem; background: rgba(15,23,42,0.45); border-radius: 10px; margin-top: 0.5rem; }
.plan-row em { font-style: normal; color: #93c5fd; }
.check-grid { display: grid; gap: 0.8rem; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); }
ul { padding-left: 1rem; display: grid; gap: 0.35rem; }
@media (max-width: 760px){ .plan-row { grid-template-columns: 1fr; } }
</style>
