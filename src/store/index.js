import { createStore } from "vuex";
import ui from "./modules/ui"
import user from "./modules/user";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
let ls = new SecureLS({ isCompression: false });
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ui,
    user
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
      paths: ["ui.themeMode","user.user"],
    }),
  ],
});
