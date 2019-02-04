import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './components/NotFound.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        description: 'Home page.',
      },
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        description: 'About page.',
      },
      component: () => import('./views/About.vue'),
    },
    { path: '*',
      component: NotFound,
    },
  ],
});
