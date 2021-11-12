import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';
import user from './modules/user';

export const store = new Vuex.Store({
  modules: {
    auth,
    user
  },
  plugins: [createPersistedState()]
})
