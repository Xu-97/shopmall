<template>
  <div class="detail-shop-info">
     
     <div class="shop-info"  v-if="Object.keys(shop).length !==0">
     <div class="shop-servies">
         <div class="servies">
          <img :src="shop.services[1].icon" alt="">
           <span>{{shop.services[1].name}}</span>
         </div>
         <div class="servies">
          <img :src="shop.services[2].icon" alt="">
          <span>{{shop.services[2].name}}</span>
         </div>
         <div class="servies">
          <img :src="shop.services[3].icon" alt="">
          <span>{{shop.services[3].name}}</span>
         </div>
     </div>
     <div class="shop-detail">
       <div class="shop-logo"><img :src="shop.shopLogo" alt=""></div>
       <div class="shop-name">{{shop.name}}</div>
     </div>
      <div class="shop-sale">
        <div class="sale-num">
         <div class="sale-left">
             <div> {{shop.cSells}}</div>   
              <div>总销量</div>  
         </div>
        <div class="sale-right">
           <div>{{shop.cGoods}}</div>
           <div>全部宝贝</div>
        </div>
        </div>
         <div class="sale-desc">
          <div class="desc">
           <div v-for="(item,index) in shop.score" :key="index">
              <div>{{item.name}}</div>
               <div class="score" :class="{'score-better': item.isBetter}"><span>{{item.score}}</span></div>
               <div class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter? '高':'低'}}</span></div>
           </div>
          </div>
         </div>
      </div>
    <!--进店逛逛-->
    <div class="shop-enter">
      <div ><a href="">进店逛逛</a></div>
    </div>
   </div>
  </div>
</template>
<script>
export default {
    name: 'DetailShopInfo',
    props: {
        shop:{
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>
<style lang="less" scoped>
 .detail-shop-info .shop-detail {
     display: flex;
     align-items: center;
         padding: 10px;
     .shop-logo img{
         width: 1.8rem;
         height: 1.8rem;
     }
     .shop-name {
    margin-left: 10px;
    font-size: 0.4rem;
     }
 }
 .shop-servies{
     display: flex;
     justify-content: space-around;
     background: #fbf9f9;
     height: 1rem;
    line-height: 1rem;
     .servies{
     display: flex;
    align-items: center;
    font-size: 0.3rem;
       img{
           width: 0.3rem;
       }
     }

 }
 .shop-sale{
     display: flex;
     align-items: center;
 }
 .shop-sale .sale-num {
   display: flex;
    width: 49%;
    justify-content: space-around;
    .sale-left div:nth-child(1){
        font-weight: 500;
        font-size: 0.5rem;
        padding: 5px;
    }
    .sale-right div:nth-child(1){
        font-weight: 500;
        font-size: 0.5rem;
        padding: 5px;
    }
 }
 .shop-sale .sale-desc{

     width: 49%;
   
    .desc div{
        display: flex;
        justify-content: space-between;
        padding: 3px 5px;

    }
    
 }
 .score, .better{
     color: rgb(59, 98, 0);
 }
 .score-better, .better-more{
     color: red;
 }
 .shop-enter div{
    background: #e5e3e3;
    width: 60%;
    margin: auto;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 20px;
 }
 .shop-enter{
   padding: 10px 0;
 }
</style>
