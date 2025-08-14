import { createRouter, createWebHistory } from 'vue-router'
import Agadir from './components/Agadir.vue'
import Marrakech from './components/Marrakech.vue'
import Essaouira from './components/Essaouira.vue'
import Programme from './components/Programme.vue'
import Calendrier from './components/Calendrier.vue'
import Jour1 from './components/Jour1.vue'
import Jour2 from './components/Jour2.vue'
import Jour3 from './components/Jour3.vue'
import Jour4 from './components/Jour4.vue'

const routes = [
  { path: '/', component: Programme },
  { path: '/calendrier', component: Calendrier },
  { path: '/agadir', component: Agadir },
  { path: '/marrakech', component: Marrakech },
  { path: '/essaouira', component: Essaouira },
  { path: '/jour1', component: Jour1 },
  { path: '/jour2', component: Jour2 },
  { path: '/jour3', component: Jour3 },
  { path: '/jour4', component: Jour4 },
  { path: '/jour5', component: () => import('./components/Jour5.vue') },
  { path: '/jour6', component: () => import('./components/Jour6.vue') },
  { path: '/jour7', component: () => import('./components/Jour7.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
