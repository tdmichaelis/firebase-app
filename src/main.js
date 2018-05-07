import Vue from 'vue'
import App from './App.vue'
import router from './router'
import config from './config'
import firebase from 'firebase'
import 'firebase/firestore'
import store from './store'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'

import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false

let app
firebase.initializeApp(config)
var db = firebase.firestore()
const settings = { /* your settings... */ timestampsInSnapshots: true }
db.settings(settings)
store.dispatch('setDatabase', db)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
