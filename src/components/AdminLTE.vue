<template>
  <div class="wrapper">
    <NaviBar :logoText="logoText" :logoMiniText="logoMiniText"></NaviBar>
    <Sider :menus="menus"></Sider>
    <div class="content-wrapper">
      <section class="content">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.min.css";
import "admin-lte/bootstrap/css/bootstrap.min.css";
import "admin-lte/dist/css/AdminLTE.min.css";
import "admin-lte/dist/css/skins/_all-skins.css";

import "admin-lte/bootstrap/js/bootstrap.min.js";
import "admin-lte/dist/js/app.js";

import { mapState } from "vuex"
import Vue from 'vue'

import Sider from './Sider'
import NaviBar from './NaviBar'

export default {
  data() {
    return {
    }
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
  }
}
</script>
