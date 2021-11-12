//import axios from 'axios'

const state = {
  user: null
};

const getters = {
  user: state => state.user
};

const actions = {
  async loadUser({ commit, rootState })
  {
    const access_token = rootState.auth.access_token

    const result = await fetch('https://api.elvanto.com/v1/people/currentUser.json', {
      method: 'GET',
      //withCredentials: true,
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${access_token}`, //Removed when mode: 'no-cors'
        'X-TEST': 'HEADER'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      mode: 'cors' //'no-cors'
    });

    if(result.status == 200) {
      commit('setUser', result.data)
    }
  }
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
