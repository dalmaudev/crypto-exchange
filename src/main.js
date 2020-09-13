import Vue from 'vue' //importa la libreria de vue
import App from './App.vue' //importar el componente App
import '@/assets/css/tailwind.css'
import Chart from 'chart.js'
import Chartkick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'

Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))

//registramos un nuevo filtro
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.config.productionTip = false

//instancia de vue
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
