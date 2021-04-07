<template>
  <div class="cart">
  <nav-bar class="nav-bar">
    <template v-slot:center><div class="middle">购物车({{cartListLength}})</div></template>
  </nav-bar>
  <cart-list></cart-list>
  <!--底部汇总栏-->
  <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>

import NavBar from "../../components/NavBar/NavBar"
import CartList from "./childCom/CartList"
import CartBottomBar from "./childCom/CartBottomBar"

import {mapGetters}  from "vuex"
export default {
  name: 'Cart',
  components: {
    NavBar,
   CartList,
   CartBottomBar
  },
  computed: {
    // cartListLength(){
    //   return this.$store.getters.cartListLength
    // }
     ...mapGetters([
       'cartListLength'
     ])
  }

}
</script>
<style lang="less" scoped>
.cart .nav-bar{
  background: rgb(6, 84, 252);
  color: #ffffff;
  z-index: 10;
  .middle{
    font-size: 0.5rem;
  }
}
.cart{
  height: 100vh;
}
</style>
