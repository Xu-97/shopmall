<template>
  <scroll class="category-scroll-left">
  <div class="categary-titles">
   <div class="title-items" 
   v-for="(item,index) in lefttitles" 
   :key="index"
   @click="categoryClick(item,index)"
   :class="{active:index==currentIndex}"
   >
  {{item.title}}
   </div>
  </div>
  </scroll>
</template>
<script>
import Scroll from "../../../components/scroll/Scroll"
export default {
    name:"CategaryTitles",
    components:{
        Scroll
    },
    data(){
        return{
           currentIndex:0
        }
    },
    props:{
       lefttitles:{
        type:Array,
        default(){
            return []
        }
        }

    },
   methods:{
       categoryClick(item,index){
       //console.log(item);
       //console.log(index);
       const obj = {
        maitKey: item.maitKey,
        index
      };
      this.currentIndex = index;
       this.$emit("categoryClick", obj);
    }
   }
}
</script>
<style lang="less" scoped>
.title-items{
    height: 46px;
    line-height: 46px;
    background: #fff;
    text-align: center;
    position: relative;
}
.category-scroll-left{
    position: relative;
    height: 100%;
    overflow: hidden;
}
.categary-titles .active{
    color: red;
}
</style>
