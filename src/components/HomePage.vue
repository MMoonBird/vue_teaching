<template>
    <div id="homePage">
        首页组件

        <button @click="getData()">请求数据</button>

        <ul>
            <li v-for="item in list">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    /*
    *   请求数据的模板
    *   vue-resource 官方提供的插件
    *   使用vue-resource获取请求数据的步骤
    *       1,安装
    *       2,如果要使用vue-resource需要在main.js中引入vue-resourcenpm install vue-resource
    *       3,需要调用Vue.use()函数使用vue-resource
    *       4,在组件里直接使用this.$http.get.then的方式获取数据
    *   axios
    *   fetch-json
    */
    export default {
        name: "HomePage",
        data(){
            return {
                msg:"我是一个首页组件msg",
                flag:true,
                list:[]
            }
        },
        methods:{
            getData(){
                var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
              this.$http.get(url).then(function(response){
                    console.info(response);
                    this.list = response.body.result;
              },function(err){
                    console.info(err);
              })
            }
        }
    }
</script>

<style scoped>

</style>