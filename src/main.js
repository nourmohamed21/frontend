import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vue-toast-notification/dist/theme-bootstrap.css';
// import '../public/css/vendors_css.css'
import '!/assets/vendor_components/bootstrap/dist/css/bootstrap.css'
import '!/css/style.css'
import '!/css/skin_color.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
