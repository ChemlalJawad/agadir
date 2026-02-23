<template>
  <div class="programme-container">
    <section class="hero glass">
      <h1>Itinéraire Japon optimisé et cohérent</h1>
      <p>
        Objectif : alterner l'intensité (grandes villes) et la récupération (nature/onsen),
        tout en minimisant les retours inutiles entre régions.
      </p>
      <div class="kpi-row">
        <div class="kpi"><span>21</span> jours</div>
        <div class="kpi"><span>6</span> segments</div>
        <div class="kpi"><span>2</span> phases voiture</div>
        <div class="kpi"><span>4</span> réservations critiques</div>
      </div>
    </section>

    <section class="grid">
      <article
        v-for="phase in itineraryPhases"
        :key="phase.id"
        class="phase-card glass"
        @mouseenter="active = phase.id"
      >
        <div class="phase-head">
          <h2>{{ phase.title }}</h2>
          <span>{{ phase.nights }} nuits • {{ phase.transport }}</span>
        </div>
        <p class="vibe">{{ phase.vibe }}</p>
        <p class="rationale">{{ phase.rationale }}</p>
        <ul>
          <li v-for="h in phase.highlights" :key="h">{{ h }}</li>
        </ul>
      </article>
    </section>

    <section class="glass reservation-panel">
      <h2>Fenêtre de réservations prioritaires</h2>
      <div class="reservation-list">
        <div v-for="item in reservationCritical" :key="item.item" class="reservation-item">
          <strong>{{ item.item }}</strong>
          <span>{{ item.timing }}</span>
          <em>{{ item.priority }}</em>
        </div>
      </div>
    </section>

    <section class="glass logic-panel" v-if="activePhase">
      <h2>Focus logique : {{ activePhase.title }}</h2>
      <p>{{ activePhase.rationale }}</p>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { itineraryPhases, reservationCritical } from '../data/japanPlan'

const active = ref(itineraryPhases[0].id)
const activePhase = computed(() => itineraryPhases.find((p) => p.id === active.value))
</script>

<style scoped>
.programme-container { display: grid; gap: 1rem; color: white; }
.glass { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); border-radius: 18px; backdrop-filter: blur(14px); }
.hero { padding: 1.5rem; }
.hero h1 { margin-bottom: 0.5rem; font-size: clamp(1.4rem, 3vw, 2.2rem); }
.hero p { opacity: 0.92; }
.kpi-row { margin-top: 1rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.6rem; }
.kpi { background: rgba(2,6,23,0.45); border-radius: 12px; padding: 0.7rem; text-align: center; }
.kpi span { display: block; font-size: 1.3rem; font-weight: 700; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.9rem; }
.phase-card { padding: 1rem; transition: 220ms ease; }
.phase-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.4); }
.phase-head { display: flex; justify-content: space-between; align-items: start; gap: 0.8rem; }
.phase-head span { font-size: 0.78rem; opacity: 0.8; }
.vibe { margin: 0.4rem 0; color: #c7d2fe; font-weight: 600; }
.rationale { font-size: 0.92rem; opacity: 0.9; margin-bottom: 0.6rem; }
ul { padding-left: 1rem; display: grid; gap: 0.35rem; }
.reservation-panel, .logic-panel { padding: 1rem 1.2rem; }
.reservation-list { display: grid; gap: 0.5rem; }
.reservation-item { display: grid; grid-template-columns: 1.4fr 1fr auto; gap: 0.6rem; padding: 0.55rem; background: rgba(15,23,42,0.45); border-radius: 10px; }
.reservation-item em { font-style: normal; color: #fde68a; font-weight: 600; }
@media (max-width: 780px){ .reservation-item { grid-template-columns: 1fr; } }
</style>
