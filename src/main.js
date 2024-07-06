import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/all.scss";
import "bootstrap";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/plugins/fontawsome.config.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
