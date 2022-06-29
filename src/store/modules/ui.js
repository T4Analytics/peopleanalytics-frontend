export default {
  namespaced: true,
  state: {
    sidebarOpen: false,
    themeMode: "light",
  },
  mutations: {
    setSidebarOpen(state, payload) {
      state.sidebarOpen = payload;
    },
    setThemeMode(state, payload) {
      state.themeMode = payload;
    },
  },
  getters: {
    getSidebarOpen: (state) => state.sidebarOpen,
    getThemeMode: (state) => state.themeMode,
  },
};
