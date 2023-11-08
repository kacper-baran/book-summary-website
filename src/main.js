import "./assets/scss/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import BaseSection from "./components/base/BaseSection.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseCard from "./components/base/BaseCard.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('base-section', BaseSection);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.mount("#app");
