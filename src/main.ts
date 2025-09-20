import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createPinia } from 'pinia';
import 'vue-loading-overlay/dist/css/index.css';
import { LoadingPlugin } from 'vue-loading-overlay';
import "vue3-carousel/carousel.css";
import "vue3-toastify/dist/index.css";
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.use(LoadingPlugin);
app.mount('#app')


