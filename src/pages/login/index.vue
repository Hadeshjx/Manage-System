<template>
  <div class="login">
    <p><label for="">用户名</label>
      <el-input v-model="userId"></el-input>
    </p>
    <p><label for="">密码</label>
      <el-input v-model="passWord"></el-input>
    </p>
    <el-button @click="submit">保存</el-button>
  </div>
</template>

<script>
import { login } from "../../api"
export default {
  name: "index",
  methods:{
    async submit(){
      let data = await login(this.userId)
      console.log(data)
      // 拿到token后要存在localstorage和vuex

      this.$store.commit('LOGIN_IN',data.token)


      // this.$axios.post('/login').then(res=>{
      //   console.log('res',res)
      // }).catch(err=>{
      //   console.log(err)
      // })


    }
  },
  data(){
    return {
      userId: null,
      passWord: null
    }
  }
}
</script>

<style scoped>

</style>