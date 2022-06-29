import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index"
import store from "./store/index"
import "./assets/style.css";
import "./assets/scroolbar.css";
import appHeader from "./components/dashboard/shared/appHeader.vue"
import appSidebar from "./components/Dashboard/shared/appSidebar.vue";
import appFooter from "./components/Dashboard/shared/appFooter.vue";
import appScroolToTopButton from "./components/Dashboard/shared/appScroolToTopButton.vue";

const app = createApp(App);
app.component('appHeader',appHeader)
app.component("appSidebar", appSidebar);
app.component("appFooter", appFooter);
app.component("appScroolToTopButton", appScroolToTopButton);
app.use(router)
app.use(store);
app.mount("#app");
