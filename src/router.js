import HomePage from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import AddPage from './components/Add.vue';
import UpdatePage from './components/Update.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = 
[  
  {
    name: 'Home',
    component: HomePage,
    path: '/'
  },

  {
    name: 'SignUp',
    component: SignUp,
    path:'/sign-up'
  },

  {
    name: 'LogIn',
    component: Login,
    path:'/login'
  },

  {
    name: 'Add',
    component: AddPage,
    path:'/add'
  },

  {
    name: 'Update',
    component: UpdatePage,
    path:'/update:id'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;