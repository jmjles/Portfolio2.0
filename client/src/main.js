import Vue from 'vue'
import App from './App.vue'
import Jquery from 'jquery'

//Defining Routes
import Home from './Home.vue'
import About from './About.vue'
import Projects from './Projects.vue'
import Clicker from './Clicker.vue'
import Location from './Location.vue'

//Defining Router and Bootstrap
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false
//Establishing Routes
Vue.use(VueRouter)
const routes = [
  { path: '/',         component: Home},
  { path: '/About',    component: About},
  { path: '/Projects', component: Projects},
  { path: '/Projects/Location', component: Location},
  { path: '/Projects/Clicker',  component: Clicker}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

//Launching Vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
