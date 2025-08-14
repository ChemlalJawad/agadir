<template>
  <div class="city-card">
    <h1>Marrakech</h1>
    <h3>Activités à faire :</h3>
    <ul>
      <li>Visite des souks et de la médina</li>
      <li>Balade en calèche</li>
      <li>Découverte de la gastronomie locale</li>
      <li>Soirée sur la place Jemaa el-Fna</li>
      <li>Excursion dans la Palmeraie</li>
    </ul>
    <h3>Endroits à visiter :</h3>
    <ul>
      <li>Jardin Majorelle</li>
      <li>Palais de la Bahia</li>
      <li>La Koutoubia</li>
      <li>Le Musée Yves Saint Laurent</li>
    </ul>
  </div>
</template>

<script setup>
// ...existing code...
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
h1 {
  color: #b52e2e;
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
