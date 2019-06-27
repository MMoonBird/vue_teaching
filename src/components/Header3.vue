<template>
  <div>
    <h2>我是一个头部组件</h2>
<!--    <button @click="run(123)">执行父组件的方法</button>-->
    <hr>
    <button @click="getParentData()">获取父组件的数据和方法</button>
  </div>
</template>

<script>
    export default {
        name: "Header3",
      methods:{
        run(){
          alert("我是子组件的run方法");
        },
        getParentData(){
          this.$parent.run();
        }
      },
    }
</script>

<style scoped>

</style>
