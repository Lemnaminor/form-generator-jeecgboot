import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/components/formGenerator/styles/index.scss'
import '@/icons'
import axios from 'axios'
import Tinymce from '@/components/formGenerator/components/tinymce/index.vue'
import JText from '@/components/formGenerator/components/JComp/JText/JText.vue'
import JSelectDept from '@/components/formGenerator/components/JComp/JSelectDept/JSelectDept.vue'
import JSelectUser from '@/components/formGenerator/components/JComp/JSelectUser/JSelectUser.vue'

Vue.component('tinymce', Tinymce)
Vue.component('JText', JText)
Vue.component('JSelectDept', JSelectDept)
Vue.component('JSelectUser', JSelectUser)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
