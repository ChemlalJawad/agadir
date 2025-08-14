<template>
  <div class="city-card">
    <h1>Agadir</h1>
    <h3>Activités à faire :</h3>
    <ul>
      <li>Plage et surf</li>
      <li>Visite du Souk El Had</li>
      <li>Excursion à la Vallée du Paradis</li>
      <li>Promenade sur la Corniche</li>
      <li>Découverte du port de pêche</li>
    </ul>
    <h3>Endroits à visiter :</h3>
    <ul>
      <li>La Kasbah d'Agadir Oufella</li>
      <li>Le Jardin de Olhao</li>
      <li>Le Musée du Patrimoine Amazigh</li>
    </ul>
  </div>
</template>

<script setup>
// ...existing code...
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
h1 {
  color: #10b981;
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
