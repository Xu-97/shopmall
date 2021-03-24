<template>
  <div class="cart-list">
  <scroll class="content">
  <list-item v-for="(item,index) in cartList" :key="index" :product="item" ></list-item>
  </scroll>
  </div>
</template>
<script>
import { mapGetters} from 'vuex'

// 引入BScroll 
import Scroll from '../../../components/scroll/Scroll'

//引入子组件
import ListItem from './ListItem'
export default {
    name: 'CartList',
    components: {
        Scroll,
        ListItem
    },
    computed: {
        ...mapGetters([
            'cartList'
        ])
    }
}
</script>
<style lang="less" scoped>
.content{
    height: 100%;
   overflow: hidden;
}
.cart-list{
      height: calc(100% - 148px);
}
</style>