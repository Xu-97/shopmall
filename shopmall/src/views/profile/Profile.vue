<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <template v-slot:left>
        <div class="nav-back" @click="backClick">
          <img src="../../assets/img/icon/arrow-left-bold.svg" alt="">
        </div>
      </template>
      <template v-slot:center><div class="nav-center">个人中心</div></template>
      <template v-slot:right>
        <div class="nav-right">
          <img src="../../assets/img/icon/gerenzhongxin.svg" alt="">
        </div>
      </template>
    </nav-bar>
    <user-login-title></user-login-title>
  </div>
</template>
<script>
import NavBar from "../../components/NavBar/NavBar"

// 加入子组件
import UserLoginTitle from "./childCom/UserLoginTitle"
export default {
  name: "Profile",
  components:{
    NavBar,
    UserLoginTitle
  },
  methods:{
    backClick(){
      this.$router.back()
    }
  }
}
</script>
<style lang="less" scoped>
.profile-nav{
 font-size: 0.5rem;
}
/*.profile-nav  .nav-center{
 
}*/
.nav-back img{
    width: 0.8rem;
    vertical-align: middle;
    background-color: #ffffff;
}
.nav-right img{
    width: 0.8rem;
    vertical-align: middle;
    background-color: #ffffff;
}
</style>
