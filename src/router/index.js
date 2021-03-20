import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 初始化路由
const routes = [
  // {
  //   path: '/',
  //   name: 'Test',
  //   component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
  // },
  {
    path:'/login',
    name:'login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/login/index')
  },
  {
    path:'/home',
    name:'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/home/index')
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// 动态路由-一般的角色是预定好的，BOMS因为角色可以自定义，所以把权限当角色

export const DynamicRoutes = [
  {
    path: '',// 不写或者'/'表示根目录
    name:'layout',
    component: () => import(/* webpackChunkName: "home" */ '../pages/layout/index'),
    redirect:"home",
    meta:{
      requiresAuth:true,// 表示需要登录才能进入
      title:"首页",
    },
    // children:[
    //   {
    //     path:"home",
    //     component:Home,
    //     name:"home",
    //     meta:{
    //       // 匹配规则
    //       title:'首页',
    //     }
    //   }
    // ]
  },
  {
    path:"/403",
    name:'Forbidden',
    component:() => import(/* webpackChunkName: "errorPage" */ '../pages/errorPage/403.vue')
  },
  {
    path:'*',
    name: '404',
    component: () => import(/* webpackChunkName: "errorPage" */ '../pages/errorPage/404.vue')
  },
]


const router = new VueRouter({
  routes
})

export default router
