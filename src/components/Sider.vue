<template>
  <aside id="slider" class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu">
          <router-link class="treeview" v-for="(item,index) in menus" :key="index" tag="li" :exact="item.path == '/'" :to="item.path">
            <a>
              <i :class="['fa', 'fa-' + item.icon]"></i>
              <span>{{item.text}}</span>
            </a>
          </router-link>
      </ul>
    </section>
  </aside>
</template>

<script>
export default {
  props: {
    menus : {
        default : () => []
    }
  },
  computed: {
    path(){
      return location.pathname;
    }
  }
}
</script>


