<template>
    <div id="new">
      新闻组件
      <br>
      <button @click="emitHome()">给Home组件广播数据</button>
    </div>

</template>

<script>
  import vueEvent from '../model/VueEvent.js'
    export default {
        name: "News",
      data(){
          return{
            msg:'我是一个新闻组件',
            title:'首页111'
          }
      },
      methods:{
        emitHome(){
          vueEvent.$emit('to-home',this.msg)
        }
      },
      mounted() {
        vueEvent.$on('to-news',function(data){
            console.log(data);
          })
      }
    }
</script>

<style scoped>

</style>
