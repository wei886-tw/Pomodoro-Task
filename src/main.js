import './assets/all.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 匯入 Bootstrap 5 icon
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


import HomeView from './HomeView.vue'

const app = createApp(HomeView)

app.use(router)

app.mount('#app')
