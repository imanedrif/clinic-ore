import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginComponent from '../components/LoginComponent.vue';
import AdminDashboard from '../components/AdminDashboard.vue';
import DoctorDashboard from '../components/DoctorDashboard.vue';
import NurseDashboard from '../components/NurseDashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/login', component: LoginComponent },

  ]
})

export default router
