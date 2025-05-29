import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './web-lab3/src/assets/css/style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
