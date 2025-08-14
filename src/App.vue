<script setup>
// ...existing code...
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Programme</router-link>
      <router-link to="/agadir">Agadir</router-link>
      <router-link to="/essaouira">Essaouira</router-link>
      <router-link to="/marrakech">Marrakech</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body, #app {
  font-family: 'Montserrat', Arial, sans-serif;
  background: linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%);
  min-height: 100vh;
  color: #222;
}
nav {
  display: flex;
  gap: 2rem;
  background: #fff;
  padding: 1rem 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px #0001;
  justify-content: center;
}
nav a {
  font-size: 1.15rem;
  color: #3b3b3b;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
}
nav a:hover {
  background: #e0e7ff;
  color: #2563eb;
}
nav a.router-link-exact-active {
  background: #2563eb;
  color: #fff;
  text-decoration: none;
}
</style>
