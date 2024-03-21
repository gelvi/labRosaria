import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '../views/HomeView.vue'

import ProductList from '@/views/ProductListView.vue'
import ShoppingCart from '@/views/ShoppingCartView.vue'    
import { users } from '../data/items.js'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: (to, from, next) => {
      const loggedInUser = users.find(user => user.isloggedIn === true);
      if (!loggedInUser) {
        next(); // Allow navigation to the login page if no user is logged in
      } else {
        // Redirect to home or any other route if the user is already logged in
        next({ name: 'home' });
      }
    }

  },
  {
    path: '/productList',
    name: 'product',
    component: ProductList,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/cartList',
    name: 'cart',
    component: ShoppingCart,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
