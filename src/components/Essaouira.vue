<template>
  <div class="city-card">
    <h1>Essaouira</h1>
    <h3>Activités à faire :</h3>
    <ul>
      <li>Balade sur la plage</li>
      <li>Sports nautiques (kitesurf, windsurf)</li>
      <li>Visite des remparts et de la médina</li>
      <li>Dégustation de poissons frais au port</li>
      <li>Découverte des galeries d'art</li>
    </ul>
    <h3>Endroits à visiter :</h3>
    <ul>
      <li>La Skala de la Ville</li>
      <li>Le port d'Essaouira</li>
      <li>Le Musée Sidi Mohamed Ben Abdallah</li>
      <li>La plage d'Essaouira</li>
    </ul>
  </div>
</template>

<script setup>
// ...existing code...
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
h1 {
  color: #2563eb;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.7rem;
  margin-bottom: 1.2rem;
  text-align: center;
}
.city-card {
  background: #fff;
  padding: 2rem;
  border-radius: 18px;
  box-shadow: 0 4px 24px #0002;
  max-width: 600px;
  margin: 0 auto;
}
ul {
  margin-bottom: 1rem;
  padding-left: 1.2rem;
}
li {
  font-size: 1.1rem;
  color: #222;
  font-family: 'Montserrat', Arial, sans-serif;
}
</style>
