<template>
  <div class="recommend">
   <div v-for="(item,index) in recommends" :key="index">
   <a :href="item.link">
   <img :src="item.image" alt="">
    <span class="recommendtitle">{{item.title}}</span>
    </a>
   </div>
  </div>
</template>
<script>
export default {
   name: "Recommend",
   props: {
       type:Array,
       recommends:{
         default(){
             return{}
         }
       }
   }
}
</script>
<style lang="less" scoped>
.recommend{
display: flex;
justify-content: space-around;
img{
width: 100%;
padding: 0 5px;
}
.recommendtitle{
font-size: 0.9em;
}
}
</style>