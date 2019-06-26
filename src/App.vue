<template>
  <div id="app">
    <!--这就是数据绑定-->
   <!-- <h2>你好Vue &#45;&#45;&#45;&#45; {{msg}}</h2>
    <br/>
    这是一个根组件
    <h3>{{object.name}}</h3>
    &lt;!&ndash;循环&ndash;&gt;
    <ul v-for="item in list">
      <li>{{item}}</li>
    </ul>
    <br>
    <ul v-for="item in list1">
       <li>
         {{item.title}}
       </li>
    </ul>
    <br>
    <ul v-for="item in list2">
      <li>
        {{item.cast}}
        <ol>
         <li v-for="x in item.list">
           {{x.title}}
         </li>
        </ol>
      </li>
    </ul>
    <hr>




&lt;!&ndash;绑定属性&ndash;&gt;
    <div v-bind:title="title">我是一个title</div>
    <br>

    {{h}}
    &lt;!&ndash;因为展示是这个样子<h2>我是h2<h2>，所以需要绑定html&ndash;&gt;
    <div v-html="h"></div>

    <hr>
    &lt;!&ndash;v-bind:class的使用&ndash;&gt;
    <div v-bind:class="{'red':flag}">我是一个div</div>








    <hr>
    -->
    <!--组件-->
    <v-home></v-home>



  </div>
</template>

<script>

  /*
  * 1，引入组件
  * 2，挂载组件
  * 3，在模板中使用组件
  *
  *
  *
  *
  * 生命周期函数：
  *   组件挂载，更新，销毁时触发的一系列方法。
  */
  /*import Home from './components/Home.vue';//引入组件*/
  import HomePage from './components/Home3'
  import life from './components/life';
export default {
  data(){//业务逻辑里定义的数据
      return{
        msg:'你好vue',
        object:{
            name:'张三',
          },
        list:['111','222', '3333'],
        list1:[
          {'title': '11111'},
          {'title': '22222'},
          {'title': '33333'},
          {'title': '4444'},
          {'title': '55555'}
        ],
        list2:[
          {
            'cast':'123123',
            list:[
              {'title':'111111'},
              {'title':'22222'},
              {'title':'33333'}
              ]
          },
        ],
        /*-------------------------------------------------------------------------------*/
        title:'我是一个title',
        h:'<h2>我是h2<h2>',
        /*--------------------------------------------------------------------------*/
        flag:true
      }

  }, components:{
    //在html中使用的名字
    'v-home':HomePage,//挂载组件
  },mounted() {
    console.info("我是一个生命周期函数");
  }

}
</script>

<style>
  .red{
    color:red;
  }
</style>
