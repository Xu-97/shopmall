<template>
  <div class="goodslist">
  <!-- {{goods}} -->
  <good-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></good-list-item>
  </div>
</template>
<script>
import GoodListItem from "./GoodListItem"
export default {
    name:"GoodList",
    components:{
    GoodListItem 
    },
    props:{
        goods:{
            type:Array,
            default(){
             return[]
            }
        }
    }
}
</script>
<style lang="less" scoped>
.goodslist{
 display: flex;
 justify-content: space-around;
 flex-wrap: wrap;
 margin-top: 0.9em;
}
</style>
