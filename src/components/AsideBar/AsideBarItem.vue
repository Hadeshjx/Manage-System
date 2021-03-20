<template>
  <div v-if="!item.hidden">
    <menu-item
        v-if="hasOneShowingChild(item.children,item)"
        :index="resolvePath(showRoute.path)"
        :icon="showRoute.meta.icon"
        :title="showRoute.meta.title"
    />

    <sub-menu v-else :index="resolvePath(item.path)" :icon="item.meta.icon" :title="item.meta.title">
      <aside-bar-item
          v-for="route in item.children.slice()"
          :base-path="resolvePath(route.path)"
          :key="route.path"
          :item="route"
      />
    </sub-menu>

  </div>
</template>

<script>
import path from 'path';
import MenuItem from "@/components/AsideBar/MenuItem";
import SubMenu from "@/components/AsideBar/SubMenu";
export default {
  name: "AsideBarItem",
  components: {SubMenu, MenuItem},
  props:{
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default:'',
    }
  },
  methods:{
    hasOneShowingChild(children=[],parent){
      const showingChildren = children.filter(item => !item.hidden)
      // 没有子路由-显示父路由
      if(showingChildren.length == 0){
        this.showRoute = {...parent,path:'',noShowingChildren: true}
        return true
      }
      // 只有一个子路由-没设置alwaysShow,则默认显示子路由
      if(showingChildren.length == 1 && !parent.alwaysShow){
        this.showRoute = showingChildren[0]
        return true
      }

      return false
    },
    resolvePath(routePath){
      function isExternal(path) {
        return /^(https?:|mailto:|tel:)/.test(path)
      }
      if(isExternal(routePath)){
        return routePath
      }

      if(isExternal(this.basePath)){
        return this.basePath
      }

      console.log('base:',this.basePath,'route:',routePath)
      console.log('result',path.resolve(this.basePath, routePath))
      return path.resolve(this.basePath, routePath)

    }
  },
  data(){
    return {
      showRoute:null
    }
  }
}
</script>

<style scoped>

</style>