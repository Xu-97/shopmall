<template>


  <div class="detail-recommend">
 
   <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
     <div class="recommend-img">
       <img :src="item.image" alt="" >
     </div>
     <div class="recommed-text">
     <div class="recommend-name">{{item.title}}</div>
     <div class="recommend-price">
      <div class="price">{{item.price}}</div>
     </div>
     </div>
   </div>
  </div>
  
</template>
<script>
export default {
    name: 'DetailRecommend',
    props: {
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style lang="less" scoped>
.detail-recommend{
    display: flex;
    flex-wrap: wrap;
    }
    .recommend-item{
    width: 49%;
    }
    img{
    width: 100%;
    padding: 5px;
    }
</style>
