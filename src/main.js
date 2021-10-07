import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
