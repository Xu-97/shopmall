<template>
  <div class="back-top" >
    <img src="../../assets/img/others/backtop.png" alt="">
  </div>
</template>
<script>
export default {
    name: "BackTop",
    // methods:{
    //     backTop(){
    //         console.log(1);
    //     }
    // }
}
</script>
<style lang="less" scoped>
.back-top{
    position :fixed;
    right: 10px;
    bottom :70px;
    z-index: 10;
    img{
        width: 36px;
        height: 36px;
    }
}
</style>