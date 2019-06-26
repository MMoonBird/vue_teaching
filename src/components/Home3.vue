<template>
    <div>
      <!--这里:home是将当前这个home对象传递给子组件-->
      <v-header :title="title" :homemsg="msg" :run="run" :home="this"></v-header>
      首页组件
    </div>
</template>

<script>
  import header from './Header2'
    export default {
        name: "Home3",
      data(){
          return {
              title:'首页',
              msg:'我是Home组件'
          }
      },
      methods:{
          run(data){
            alert("我是home组件run方法----"+data);
          }
      },
      components:{
          'v-header': header
      }
    }
</script>

<style scoped>

</style>
