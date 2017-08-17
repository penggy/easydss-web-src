<template>
  <header class="main-header">
    <a href="index.html" class="logo">
      <span class="logo-mini">{{logoMiniText}}</span>
      <span class="logo-lg">{{logoText}}</span>
    </a>
  
    <nav class="navbar navbar-static-top">
      <a class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    logoText: {
      default: "AdminLte"
    },
    logoMiniText: {
      default: "AD"
    }
  }
}
</script>


