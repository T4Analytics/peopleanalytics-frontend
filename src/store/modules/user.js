export default {
  namespaced: true,
  state: {
    user: null,
    email: "t4@t4.com",
    password: "t4",
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  getters: {
    getUser: (state) => state.user,
    getEmail: (state) => state.email,
    getPassword: (state) => state.password,
  },
};
