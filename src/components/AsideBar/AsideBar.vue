<template>
  <div class="aside-bar">
    <el-menu :router="true">
      <aside-bar-item v-for="route in selfRouter" :base-path="route.path" :key="route.path" :item="route"/>
    </el-menu>
  </div>
</template>

<script>
import AsideBarItem from "@/components/AsideBar/AsideBarItem";
export default {
  name: "AsideBar",
  components: {AsideBarItem},
  data(){
    return {
      permissions:{
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true,
        '8': true,
        '9': true,
        '10': true,
        '11': true,
        '12': true,
      },
      selfRouter:[
        {
          hidden: false, // true:该路由不会出现在侧边栏中，
          alwaysShow: true,// true:始终显示根菜单，false:没有子路由则不显示，有子路由才嵌套显示
          meta:{
            roles:['1'],// 能看到该页面的角色/权限
            title:'11',// 侧边栏和面包屑 显示的标题
            icon:'el-icon-s-goods', // 侧边栏图标
          },
          path:'/login',
          children:[
            {
              hidden: false, // true:该路由不会出现在侧边栏中，
              meta:{
                roles:['10'],// 能看到该页面的角色/权限
                title:'11-00',// 侧边栏和面包屑 显示的标题
                icon:'', // 侧边栏图标
              },
              path:'lg00'
            },
            {
              hidden: true, // true:该路由不会出现在侧边栏中，
              meta:{
                roles:['11'],// 能看到该页面的角色/权限
                title:'11-11',// 侧边栏和面包屑 显示的标题
                icon:'', // 侧边栏图标
              },
              path:'lg11'
            },
            {
              hidden: false, // true:该路由不会出现在侧边栏中，
              alwaysShow: true,
              meta:{
                roles:['12'],// 能看到该页面的角色/权限
                title:'11-12',// 侧边栏和面包屑 显示的标题
                icon:'el-icon-s-platform'
              },
              path:'lg22',
              children:[
                {
                  hidden: false, // true:该路由不会出现在侧边栏中，
                  meta:{
                    roles:['13'],// 能看到该页面的角色/权限
                    title:'11-12-13',// 侧边栏和面包屑 显示的标题
                    icon:'el-icon-s-promotion', // 侧边栏图标
                  },
                  path:'kk13'
                }
              ]
            },
          ]
        },
        {
          hidden: false, // true:该路由不会出现在侧边栏中，
          meta:{
            roles:['3'],// 能看到该页面的角色/权限
            title:'33',// 侧边栏和面包屑 显示的标题
            icon:'el-icon-question',
          },
          path:'/login2',
        },
        {
          hidden: false, // true:该路由不会出现在侧边栏中，
          alwaysShow: true,// true:始终显示根菜单，false:没有子路由则不显示，有子路由才嵌套显示
          meta:{
            roles:['5'],// 能看到该页面的角色/权限
            title:'55',// 侧边栏和面包屑 显示的标题
            icon:'el-icon-menu'
          },
          path:'http://www.baidu.com',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>