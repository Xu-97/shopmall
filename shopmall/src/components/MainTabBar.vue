<template>
     <tab-bar>
      <tab-bar-item path="/home" activeColor="#cf0000">
        <template v-slot:item-icon>
          <div class="itemimg"><img src="../assets/img/icon/home.svg" alt=""></div>
        </template>
        <template v-slot:item-icon-active>
          <div class="itemimg"><img src="../assets/img/icon/home-active.svg" alt=""></div>
        </template>
        <template v-slot:item-text>
          <div class="itemtext">首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#cf0000">
        <template v-slot:item-icon>
          <div class="itemimg"><img src="../assets/img/icon/all.svg" alt=""></div>
        </template>
        <template v-slot:item-icon-active>
          <div class="itemimg"><img src="../assets/img/icon/all-active.svg" alt=""></div>
        </template>
        <template v-slot:item-text>
          <div class="itemtext">分类</div>
        </template>
      </tab-bar-item>
      
      <tab-bar-item path="/cart" activeColor="#cf0000">
        <template v-slot:item-icon>
          <div class="itemimg"><img src="../assets/img/icon/cart-Empty.svg" alt=""></div>
        </template>
        <template v-slot:item-icon-active>
          <div class="itemimg"><img src="../assets/img/icon/cart-Empty-active.svg" alt=""></div>
        </template>
        <template v-slot:item-text>
          <div class="itemtext">购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#cf0000">
        <template v-slot:item-icon>
          <div class="itemimg"><img src="../assets/img/icon/usercenter.svg" alt=""></div>
        </template>
        <template v-slot:item-icon-active>
          <div class="itemimg"><img src="../assets/img/icon/usercenter-active.svg" alt=""></div>
        </template>
        <template v-slot:item-text>
          <div class="itemtext">个人</div>
        </template>
      </tab-bar-item>
     </tab-bar>
</template>
<script>
// @ts-ignore
import TabBar from "../components/TabBar/TabBar";
// @ts-ignore
import TabBarItem from "../components/TabBar/TabBarItem"
export default {
  name: "MainTabBar",
    components:{
     TabBar,
     TabBarItem 
    }
}
</script>
