// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// import '!/css/vendors_css.css'
// // import '!/assets/vendor_components/bootstrap/dist/css/bootstrap.css'
// import '!/css/style.css'
// import '!/css/skin_color.css'
import 'vue-toast-notification/dist/theme-bootstrap.css';



    
    
    
// <!-- Vendor JS -->
// <script src="js/vendors.min.js"></script>
//   <script src="../assets/icons/feather-icons/feather.min.js"></script>	

// <script src="../assets/vendor_components/apexcharts-bundle/dist/apexcharts.js"></script>
// <script src="../assets/vendor_components/echarts/dist/echarts-en.min.js"></script>

// <!-- Adminto App -->
// <script src="js/jquery.smartmenus.min.js"></script>
// <script src="js/menus.min.js"></script>
// <script src="js/template.min.js"></script>
// <script src="js/pages/dashboard3.js"></script>

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
