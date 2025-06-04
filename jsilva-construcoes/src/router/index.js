import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Portfolio from '../pages/Portfolio.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: About },
  { path: '/servicos', component: Services },
  { path: '/portfolio', component: Portfolio },
  { path: '/contato', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
