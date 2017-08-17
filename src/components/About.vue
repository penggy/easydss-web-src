<template>
    <div class="container-fluid no-padding">
       <button class="btn btn-success" @click.prevent="btnClick">{{btnText}}</button>
    </div>
</template>

<script>
export default {
  props: {
      btnText : {
          type : String,
          default : ""
      }
  },
  methods: {
      btnClick(){
          this.$emit("btnClick", "hello");
      }
  }
}
</script>

<style lang="less" scoped>

</style>

