<template>
  <div>
    <v-header ref="header"></v-header>
  </div>


</template>
<!--
  父组件主动获取子组件的数据和方法
    1,调用子组件的时候定义ref
      <v-header ref="header"></v-header>
     2,在父组件中使用
     this.$refs.header.属性
     this.$refs.header.方法
     属性就可以获取
  子组件主动获取父组件的数据和方法
-->
<script>
  import header from './Header3'
    export default {
        name: "Home4",
      components:{
          "v-header":header
      }
    }
</script>

<style scoped>

</style>
