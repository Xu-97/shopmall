<template>
    <div class="user-login-title">
     <div class="wellcome">
       <h3>Hi,欢迎来到蘑菇街</h3>
     </div>
     <div class="login-register" @click="loginClick">
       <div class="login">登录</div>|
       <div class="register">注册</div>
     </div>
    </div>
</template>
<script>
export default {
    name: "UserLoginTitle",
    methods:{
        loginClick(){
            this.$router.replace('/loginregiter')
        }
    }
}
</script>
<style lang="less" scoped>
.user-login-title{
    background-image: linear-gradient(#ee2828,#e66465);
    height: 4rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .wellcome{
      margin-top: 0.6rem;
    }
}
.login-register{
    display: flex;
    justify-content: center;
    margin: auto;
    height: 1rem;
    line-height: 1rem;
    background: #ffffff;
    color: #3c3c3c;
    font-size: 0.5rem;
    width: 40%;
    border-radius: 1rem;
    .login{
        margin-right: 0.4rem;
    }
    .register{
        margin-left: 0.4rem;
    }
}
</style>