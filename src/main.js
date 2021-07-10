import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueSocialSharing from 'vue-social-sharing'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "G-5S2WVEL61S" }
  , includes: [
    { id: 'G-NL7329JYL3' },
  ]

});
Vue.use(VueSocialSharing);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
