<template>
  <div>
    首页组件
    <br>
    <button @click="emitNews()">给news广播组件</button>
  </div>
</template>

<script>
  import vueEvent from '../model/VueEvent.js'
  export default {
    data(){
      return{
        msg:'我是一个home组件',
        title:'首页111'
      }
    },
    methods:{
      emitNews(){
        vueEvent.$emit('to-news',this.msg);
      }
    },mounted() {
      vueEvent.$on('to-home',function(data){
        console.info(data)
      })
    }
  }
</script>

<style scoped>

</style>
