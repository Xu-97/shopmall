<template>
  <div class="detail-bottom-bar">
  <div class="bottom-bar">
   <div class="bottom-left">
    <div class="mall">
     <div class="mall-icon"><img src="../../../assets/img/others/dianpu.png" alt=""></div>
     <div class="mall-text">店铺</div>
    </div>
    <div class="kefu">
    <div class="kefu-icon"><img src="../../../assets/img/others/kefu.png" alt=""></div>
    <div class="kefu-text">客服</div>
    </div>
    <div class="cart">
     <div class="cart-icon"><img src="../../../assets/img/others/shop-cart.png" alt=""></div>
     <div class="cart-text">购物车</div>
    </div>
   </div>
   <div class="bottom-right">
    <div class="enter-cart" @click="addToCart">
     <span>加入购物车</span>
    </div>
    <div class="buy">
    <span>立即购买</span>
    </div>
   </div>
  </div>
  </div>
</template>
<script>
export default {
    name: "DetailBottomBar",
    methods: {
       addToCart(){
         //  console.log('加入成功');
         this.$emit('addCart');
       }
    }
    
}
</script>
<style lang="less" scoped>
.detail-bottom-bar{
height: 44px;
position: relative;

left: 0;
right: 0; 
background: #fff;
}
.bottom-bar{
display: flex;
justify-content: space-around;
}
.bottom-left,.bottom-right{
width: 49%;
}
.bottom-left{
display: flex;
justify-content: space-around;
}
.bottom-left .mall, .kefu, .cart{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
img{
display: block;
width: 20px;
height: 25px;
}
.bottom-right{
display: flex;
justify-content: space-around;
align-items: center;
 .enter-cart{
    display: block;
    height: 44px;
    line-height: 44px;
    background: #cf0000;
    color: #ffffff;
    font-size: 16px;
    padding: 0 10px;
    flex: 1;
   
    /*border-radius: 25px;*/
 }
 .buy{
    display: block;
    height: 44px;
    line-height: 44px;
    background: #ffba0d;
    color: #ffffff;
    font-size: 16px;
    padding: 0 10px;
    flex: 1;
   
    /*border-radius: 25px;*/
 }
}
</style>
