import queryString from 'query-string'

const hash = queryString.parse(location.hash)
//window.history.replaceState({}, document.title, location.pathname);

const state = {
  user: null,
  access_token: hash.access_token,
  refresh_token: hash.refresh_token,
  expires_in: hash.expires_in
};

const getters = {
  isAuthenticated: state => state.access_token != null
};

const actions = {

};

const mutations = {

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
