<template>
    <div>
      生命周期函数的演示----{{msg}}
      <button @click="setMsg()">执行方法改变msg</button>
    </div>
</template>

<script>
  /*生命周期函数*/
    export default {
        name: "life",
      data(){
          return {
            msg:'msg'
          }
      },
      methods:{
          setMsg(){
            this.msg="我是改变后的数据";
          }
      },
      beforeCreate() {
          console.info("实例刚刚被创建1");
      },
      created() {
          console.info("实例已经被创建完成2");
      },
      beforeMount() {
          console.info("模板编译之前3")
      },
      mounted() {/*请求数据，操作DOM放在这个里面*/
        console.info("模板编译完成4")
      },
      beforeUpdate() {
        console.info("数据更新之前")
      },
      updated() {
        console.info("数据更新完成")
      },
      beforeDestroy() {
        console.info("实例销毁之前")
      },
      destroyed() {
        console.info("实例销毁完成")
      }

    }
</script>

<style scoped>

</style>
