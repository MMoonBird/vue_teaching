<template>
    <div>
      <v-header :title="title"></v-header>
      首页组件
    </div>
</template>
<!--
  父组件给子组件传值
    1,在父组件调用子组件时为它绑定一个动态属性
    <v-header :title="title"></v-header>
    2,在子组件中接收父组件传递的数据
      在子组件中，定义一个prop属性。
      props可以是数组或对象
      props:['title']
-->
<script>
  import header from './Header2'
    export default {
        name: "Home3",
      data(){
          return {
              title:'首页',
          }
      },
      components:{
          'v-header': header
      }
    }
</script>

<style scoped>

</style>
