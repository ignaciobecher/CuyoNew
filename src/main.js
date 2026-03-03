import { createApp } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App.vue";
import router from "./router";

import "./assets/tailwind.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});
