import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import Home from '@/components/Home5'
import News from '@/components/News'

Vue.use(Router)

/*
1,创建组件，引入路由
2,定义路由
  const routes=[
      {path:'/foo',componment:Foo},
      {path:'/bar',componment:Bar}
   ]
 3,实例化
  VueRouter
  const router = new VueRouter({
    routes    //缩写，相当于routes:routes
  })
  4,挂载
  在main.js中的Vue()实例中挂载
  new Vue({
    el:'#app',
    router,
    render:h => h(app)
  })
5,将   <router-view></router-view>放在App.vue中，动态加载路由


*/
export default new Router({
  routes: [
   /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
   /* {
      path: '/',
      name: 'components',
      component: components
    }*/
    {
      path:'/home',
      component:Home
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'*',
      redirect:'/home'//默认跳转跳转路由。
    }
  ]
})
