<template>
    <div>
      <v-header></v-header>
      <hr>
      <br>
       <life v-if="flag"></life>
      <br>
      <hr>
      <button @click="flag=!flag">挂载以及卸载life组件</button>
    </div>
</template>

<script>
  import header from './Header';
  import Life from './life.vue';
    export default {
        name: "Home",
      data(){
          return {
            flag:true
          }
      },
      components:{
          'v-header':header,
          'life':Life
      }
    }
</script>

<style scoped>

</style>
