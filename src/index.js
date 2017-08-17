import Vue from 'vue'
import store from "./store";
import AdminLTE from './components/AdminLTE'
import Index from './components/Index'

new Vue({
  el: '#app',
  store,
  template: `
  <AdminLTE>
    <Index></Index>
  </AdminLTE>`,
  components: {
    AdminLTE, Index
  },
})