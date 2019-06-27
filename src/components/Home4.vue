<template>
  <div>
    <v-header ref="header"></v-header>
    <hr>
    首页组件
    <button @click="getChildData()">获取子组件的数据和方法</button>
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
      data(){
        return{

        }
      },
      components:{
          "v-header":header
      },
      methods:{
          run(/*data*/){
            alert("我是Home组件的run方法"/*+data*/);
          },
        getChildData(){
          //alert(this.$refs.header);//获取dom节点
          this.$refs.header.run();
        }
      }
    }
</script>

<style scoped>

</style>
