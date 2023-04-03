import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '@/assets/tailwindcss.css'
import 'animate.css';
const app = createApp(App)
const pinia = createPinia()
pinia.use(persist)
app.use(pinia)
app.use(router)

app.mount('#app')
