import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Programme',
    component: () => import('./components/Programme.vue'),
    meta: { title: 'Programme - Japan Travel Command Center' }
  },
  {
    path: '/calendrier',
    name: 'Calendrier',
    component: () => import('./components/Calendrier.vue'),
    meta: { title: 'Calendrier - Japan Travel Command Center' }
  },
  {
    path: '/agadir',
    name: 'Tokyo',
    component: () => import('./components/Agadir.vue'),
    meta: { title: 'Tokyo - Japan Travel Command Center' }
  },
  {
    path: '/essaouira',
    name: 'FujiHakone',
    component: () => import('./components/Essaouira.vue'),
    meta: { title: 'Fuji & Hakone - Japan Travel Command Center' }
  },
  {
    path: '/marrakech',
    name: 'KansaiEtExtensions',
    component: () => import('./components/Marrakech.vue'),
    meta: { title: 'Kansai & Extensions - Japan Travel Command Center' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./components/NotFound.vue'),
    meta: { title: 'Page introuvable - Japan Travel Command Center' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Japan Travel Command Center'
  next()
})

export default router
