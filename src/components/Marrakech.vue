<template>
  <div class="page">
    <section class="glass hero">
      <h1>Kansai + Extensions : enchaînement logique final</h1>
      <p>Kyoto → Osaka garde une continuité géographique, puis on termine par Ghibli Park et Alpes pour une sortie en douceur.</p>
    </section>

    <section class="columns">
      <article class="glass card" v-for="block in blocks" :key="block.title">
        <h2>{{ block.title }}</h2>
        <p>{{ block.note }}</p>
        <ul>
          <li v-for="point in block.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script setup>
const blocks = [
  {
    title: 'Kyoto — 4 jours',
    note: 'Visits tôt matin pour éviter les pics de foule.',
    points: ['Fushimi Inari à l’aube', 'Philosopher’s Path', 'Arashiyama arrière-sentiers', 'Otagi Nenbutsu-ji', 'Nara : Tosho Daiji, Kinpusenji, Okadera, Hasedera', 'Soirées Pontocho']
  },
  {
    title: 'Osaka — 3 jours',
    note: 'Bloc énergie + shopping + parc à thème.',
    points: ['Shinsekai rétro', 'Amerikamura street culture', 'Shinsaibashi (Kindal, Brand Off)', 'USJ + Super Nintendo World (2 mois avant)', 'Dotonbori néons extrêmes']
  },
  {
    title: 'Tohoku & Alpes — final',
    note: 'Contraste fort pour finir le voyage avec une empreinte mémorable.',
    points: ['Sendai + ferry Tashirojima', 'Retour par Matsushima', 'Ghibli Park', 'Kiso : Magome/Tsumago', 'Takayama vieille ville + ryokan campagne']
  }
]
</script>

<style scoped>
.page { display: grid; gap: 1rem; color: white; }
.glass { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); border-radius: 18px; backdrop-filter: blur(14px); }
.hero, .card { padding: 1rem 1.2rem; }
.columns { display: grid; gap: 0.8rem; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); }
.card p { color: #c7d2fe; font-weight: 600; }
ul { padding-left: 1rem; display: grid; gap: 0.35rem; margin-top: 0.5rem; }
</style>
