<template>
  <div class="detail-base-info">
    <div class="detail" v-if="Object.keys(goods).length !==0 ">
     <div class="detail-title"> {{goods.title}}</div>
     <div class="price-box">
      <div class="real-price">{{goods.price}}</div>
      <div class="old-price">{{goods.oldPrice}}</div>
      <div class="price-title">活动价</div>
     </div>
     <div class="detail-shopinfo">
      <div class="shopinfo-sale">{{goods.columns[0]}}</div>
      <div class="shopinfo-fav">{{goods.columns[1]}}</div>
      <div class="shopinfo-time">{{goods.columns[2]}}</div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'DetailBaseInfo',
    props: {
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
}
</script>
<style lang="less" scoped>
.detail{
  .detail-title{
    font-size: 0.4rem;
    font-weight: 500;
    text-align: left;
    padding: 0.2rem;
  }
  .price-box{
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 80%;
    padding: 0.2rem;
  }
    .real-price{
       flex: 0.5;
       font-size: 0.5rem;
       color: #3f44ff
       
    }
    .old-price{
    text-decoration: line-through;
    font-size: 0.3rem;
    color: #797979;
    flex: 0.5;
    }
    .price-title{
    flex: 1;
    background: #5075fd;
    font-size: 0.4rem;
    color: #ffffff;
    border-radius: 11px;
    }
   .detail-shopinfo{
    display: flex;
    justify-content: space-between;
    height: 1rem;
    line-height: 1rem;
    color: #444;
    font-size: 0.3rem;
    padding: 0.2rem;
   }
}
</style>
