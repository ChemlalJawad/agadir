import { createRouter, createWebHistory } from 'vue-router'
import Agadir from './components/Agadir.vue'
import Marrakech from './components/Marrakech.vue'
import Essaouira from './components/Essaouira.vue'
import Programme from './components/Programme.vue'

const routes = [
  { path: '/', component: Programme },
  { path: '/agadir', component: Agadir },
  { path: '/marrakech', component: Marrakech },
  { path: '/essaouira', component: Essaouira },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
