import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// formGenerator
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import '@/components/formGenerator/styles/index.scss'
import '@/components/formGenerator/icons'
import Tinymce from '@/components/formGenerator/components/tinymce/index.vue'
import JText from '@/components/formGenerator/components/JComp/JText/JText.vue'
import JSelectDept from '@/components/formGenerator/components/JComp/JSelectDept/JSelectDept.vue'
import JSelectUser from '@/components/formGenerator/components/JComp/JSelectUser/JSelectUser.vue'

Vue.component('tinymce', Tinymce)
Vue.component('JText', JText)
Vue.component('JSelectDept', JSelectDept)
Vue.component('JSelectUser', JSelectUser)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
