import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Programme',
    component: () => import('./components/Programme.vue'),
    meta: { title: 'Programme - Morocco Explorer' }
  },
  {
    path: '/calendrier',
    name: 'Calendrier',
    component: () => import('./components/Calendrier.vue'),
    meta: { title: 'Calendrier - Morocco Explorer' }
  },
  {
    path: '/agadir',
    name: 'Agadir',
    component: () => import('./components/Agadir.vue'),
    meta: { title: 'Agadir - Morocco Explorer' }
  },
  {
    path: '/marrakech',
    name: 'Marrakech',
    component: () => import('./components/Marrakech.vue'),
    meta: { title: 'Marrakech - Morocco Explorer' }
  },
  {
    path: '/essaouira',
    name: 'Essaouira',
    component: () => import('./components/Essaouira.vue'),
    meta: { title: 'Essaouira - Morocco Explorer' }
  },
  {
    path: '/jour1',
    name: 'Jour1',
    component: () => import('./components/Jour1.vue'),
    meta: { title: 'Jour 1 - Morocco Explorer' }
  },
  {
    path: '/jour2',
    name: 'Jour2',
    component: () => import('./components/Jour2.vue'),
    meta: { title: 'Jour 2 - Morocco Explorer' }
  },
  {
    path: '/jour3',
    name: 'Jour3',
    component: () => import('./components/Jour3.vue'),
    meta: { title: 'Jour 3 - Morocco Explorer' }
  },
  {
    path: '/jour4',
    name: 'Jour4',
    component: () => import('./components/Jour4.vue'),
    meta: { title: 'Jour 4 - Morocco Explorer' }
  },
  {
    path: '/jour5',
    name: 'Jour5',
    component: () => import('./components/Jour5.vue'),
    meta: { title: 'Jour 5 - Morocco Explorer' }
  },
  {
    path: '/jour6',
    name: 'Jour6',
    component: () => import('./components/Jour6.vue'),
    meta: { title: 'Jour 6 - Morocco Explorer' }
  },
  {
    path: '/jour7',
    name: 'Jour7',
    component: () => import('./components/Jour7.vue'),
    meta: { title: 'Jour 7 - Morocco Explorer' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./components/NotFound.vue'),
    meta: { title: '404 - Page non trouvée' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Morocco Explorer - Voyage au Maroc'
  next()
})

export default router
