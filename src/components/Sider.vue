<template>
  <aside id="slider" class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu">
          <li :class="['treeview', path == item.path ? 'active' : '']" v-for="(item,index) in menus" :key="index">
            <a :href="item.path">
                <i :class="['fa', 'fa-' + item.icon]"></i>
                <span>{{item.text}}</span>
            </a>
          </li>
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


