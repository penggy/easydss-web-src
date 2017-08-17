import Vue from 'vue'
import store from "./store";
import AdminLTE from './components/AdminLTE'
import About from './components/About'

new Vue({
  el: '#app',
  store,
  template: `
  <AdminLTE>
    <About @btnClick="btnClick" btnText="点我向父组件传递信息"></About>
  </AdminLTE>`,
  components: {
    AdminLTE, About
  },
  methods: {
    btnClick(msg){
      alert(msg);
    }
  }
})