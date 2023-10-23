import axios from 'axios';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

axios.defaults.baseURL = 'https://swapi.dev/';
const app = createApp(App)

app.use(router)
app.use(bootstrap)
app.mount('#app')
