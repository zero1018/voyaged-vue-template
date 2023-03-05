import { createApp } from 'vue'
import store from './store'

import App from './App.vue'
import router from './router'
// 引入全局样式
import '@/styles/index.css'
const app = createApp(App)
window.vm = app

app.use(store)
app.use(router)

app.mount('#app')
