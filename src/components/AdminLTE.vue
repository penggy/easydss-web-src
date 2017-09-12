<template>
  <div class="wrapper">
    <NaviBar :logoText="logoText" :logoMiniText="logoMiniText"></NaviBar>
    <Sider :menus="menus"></Sider>
    <div class="content-wrapper">
      <section class="content">
        <transition>
          <router-view @btnClick="btnClick"></router-view>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.css"
import "admin-lte/bootstrap/css/bootstrap.css"  
import "admin-lte/dist/css/AdminLTE.css"
import "admin-lte/dist/css/skins/_all-skins.css"

import "admin-lte/bootstrap/js/bootstrap.js"
import "admin-lte/dist/js/app.js"

import { mapState } from "vuex"
import Vue from 'vue'

import Sider from 'components/Sider'
import NaviBar from 'components/NaviBar'

export default {
  data() {
    return {
    }
  },
  mounted() {
    $(() => {
      $.AdminLTE.layout.fix();
    })
  },
  components: {
    NaviBar, Sider
  },
  computed: {
    //访问 vuex store 中的数据
    //此处用到 es6 stage-2 才有的三个点展开对象的语法, 对应 .babelrc 中的配置
    ...mapState([
      "logoText",
      "logoMiniText",
      "menus"
    ])
  },
  methods: {
    btnClick(msg){
      alert(msg);
    }
  }  
}
</script>
