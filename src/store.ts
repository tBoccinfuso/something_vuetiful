import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app_name: 'Something Vuetiful',
    page_name: '',
  },
  mutations: {
    CHANGE_PAGE_NAME: (state, payload) => {
      state.page_name = payload;
    },
  },
  actions: {
    changePageName: ({ commit }, payload) => {
      commit('CHANGE_PAGE_NAME', payload);
    },
  },
});
