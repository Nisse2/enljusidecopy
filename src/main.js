import Vue from 'vue'
import App from './App.vue'
import { rtdbPlugin } from 'vuefire'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(rtdbPlugin)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
