import { createApp } from "vue";
import * as vant from "vant";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/routes";
import "./style.css";
import "vant/lib/index.css";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia();
const app = createApp(App);
app.use(vant).use(router).use(ElementPlus).use(pinia).mount("#app");
