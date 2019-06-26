<template>
    <div>
      <h2>我是一个头部组件---{{title}}---{{homemsg}}</h2>
      <button @click="run(123)">执行父组件的方法</button>
      <button @click="getParent()">获取父组件对象</button>
    </div>
</template>

<script>
    export default {
        name: "Header2",
      data(){
          return {

          }
      },methods:{
          getParent(data){
            alert(this.title);
            this.home.run(2354);
          }
      },
      /*这里home接收的是父组件的对象home*/
      props:{
        /*验证父组件传值的正确性*/
        'title':String,
      /*  ['title','homemsg',"run","home"]*/
      }
    }
</script>

<style scoped>

</style>
