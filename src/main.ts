import Vue from 'vue';
import App from './App.vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

// Set the document title equal the page we are on. Get's the page name from router path.name
router.afterEach((to, from) => {
  store.dispatch('changePageName', to.name);
  document.title = `${store.state.page_name} | ${store.state.app_name}`;
});

// App Body
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// Header
new Vue({
  router,
  store,
  render: (h) => h(Header),
}).$mount('#header');

// Footer
new Vue({
  router,
  store,
  render: (h) => h(Footer),
}).$mount('#footer');
