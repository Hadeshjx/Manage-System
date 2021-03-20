<template>
  <el-menu-item :index="index">
    <i :class="icon"></i>
    <span slot="title">{{title}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "MenuItem",
  props:{
    icon:String,
    title:String,
    index:String
  }
}
</script>

<style scoped>

</style>