import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import MainView from '@/views/MainView.vue';
import DashBoard from '@/components/DashBoard.vue'; //d
import DepositsEntry from '@/components/DepositsEntry.vue';
import StocksEntry from '@/components/StocksEntry.vue';
import UserSettings from '@/components/UserSettings.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  {
    path: '/dashboard',
    component: MainView,
    children: [
      { path: '', component: DashBoard },
      { path: '/deposits', component: DepositsEntry },
      { path: '/stocks', component: StocksEntry },
      { path: '/settings', component: UserSettings }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
