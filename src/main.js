// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// import '!/css/vendors_css.css'
// import '!/assets/vendor_components/bootstrap/dist/css/bootstrap.css'
// import '!/css/style.css'
// import '!/css/skin_color.css'
import 'vue-toast-notification/dist/theme-bootstrap.css';
import '!/css/bootstrap.min.css';
// import '!/css/skin_color.css';
// import '!/css/style.css';
// import '!/css/LastEffect.css';

// import '!/css/swal.css';
// import '!/css/horizontal-menu.css';
// import '!/css/style_rtl.css';
// import '!/css/font-awesome.min.css';
// import '!/css/animate.css';
// import '!/css/color_theme.css';

// import '!/js/vendors.min.js';

const app = createApp(App);

app.use(createPinia())
app.use(router)
app.mount('#app')
