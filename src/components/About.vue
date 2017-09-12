<template>
    <div class="container-fluid no-padding">
       <button class="btn btn-success" @click.prevent="btnClick">点我向父组件传递信息</button>
    </div>
</template>

<script>
export default {
  methods: {
      btnClick(){
          this.$emit("btnClick", "hello");
      }
  }
}
</script>

<style lang="less" scoped>

</style>

