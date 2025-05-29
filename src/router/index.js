import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import PhonebookView from '../views/PhonebookView.vue'  // імпорт довідника

const routes = [
  { path: '/register', component: RegisterView },
  { path: '/login', component: LoginView },
  { path: '/profile', component: ProfileView },
  { 
    path: '/phonebook', 
    component: PhonebookView,
    meta: { requiresAuth: true }   // позначка що потрібна авторизація
  },
  // інші маршрути...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Глобальний guard для захисту маршрутів з requiresAuth
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('currentUser')
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')  // якщо не залогінений, кидаємо на логін
  } else {
    next()  // інакше пропускаємо
  }
})

export default router
