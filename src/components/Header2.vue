<template>
    <div>
      <h2>我是一个头部组件---{{title}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Header2",
      data(){
          return {

          }
      },
      props:['title']
    }
</script>

<style scoped>

</style>
