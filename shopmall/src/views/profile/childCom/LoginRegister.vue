<template>
    <div class="login-register">
      <nav-bar class="profile-nav">
        <template v-slot:left>
           <div class="nav-back" @click="backButton">
             <img src="../../../assets/img/icon/arrow-left-bold.svg" alt="">
           </div>
      </template>
        <template v-slot:center><div class="nav-center">登录|注册</div></template>
      </nav-bar>
    </div>
</template>
<script>
import NavBar from "../../../components/NavBar/NavBar"
export default {
    name: 'LoginRegister',
    components: {
      NavBar  
    },
    methods: {
      backButton(){
        this.$router.back();
      }
    }
}
</script>
<style lang="less" scoped>
.nav-center{
 font-size: 0.5rem;
}
.profile-nav{
}
.nav-back img{
    width: 0.8rem;
    vertical-align: middle;
       
}
</style>