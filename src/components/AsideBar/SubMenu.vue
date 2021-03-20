<template>
  <el-submenu :index="index">
    <template slot="title">
      <i :class="icon"></i>
      <span>{{title}}</span>
    </template>
    <slot/>
  </el-submenu>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    index:String,
    icon:String,
    title: String
  }
}
</script>

<style scoped>

</style>