<template>
   <scroll class="category-scroll-right">
  <div class="category-right">
    <right-item class="right-items" 
    v-for="(item,index) in rightCategoryList" 
    :key="index"
    :item="item"
    ></right-item>
  </div>
 </scroll>
</template>
<script>
import RightItem from "./RightItem"
import Scroll from "../../../components/scroll/Scroll"
export default {
    name:'CategoryRight',
    props:{
        rightCategoryList:{
            type:Array,
            default(){
                  []
            }
        }
    },
    components:{
        RightItem,
        Scroll
    }
}
</script>
<style lang="less" scoped>
 .category-scroll-right{
    position: relative;
    height: 100%;
    overflow: hidden;
}
.category-right{
    display: flex;
    flex-wrap: wrap;
}
.right-items{
    width: 33%;
}
</style>