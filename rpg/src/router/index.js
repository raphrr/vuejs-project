import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from "@/pages/Home";
import Boutique from "@/pages/Boutique";
import Personnage from "@/pages/Personnage";
import Item from "@/pages/Item";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/shop',
    component: Boutique
  },
  {
    path: '/shop/:id',
    component: () => import('../pages/BoutiqueDetail')
  },
  {
    path: '/personnage',
    component: Personnage
  },
  {
    path: '/personnage/:id',
    component: () => import('../pages/PersonnageDetail')
  },
  {
    path: '/item',
    component: Item
  },
  {
    path: '/item/:id',
    component: () => import('../pages/ItemDetail')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
