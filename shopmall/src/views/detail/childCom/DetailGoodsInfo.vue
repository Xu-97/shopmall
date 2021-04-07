<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !==0">
  <div class="detail-goods-title">
   {{detailInfo.desc}}

  </div>
  <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
  <div class="list-info">
   <img 
    v-for="(item,index) in detailInfo.detailImage[0].list" :key="index"
    :src="item" alt="" 
    @load="imgLoad()"
    >
  </div>
  </div>
</template>
<script>
export default {
    name: 'DetailGoodsInfo',
    props: {
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
          counter: 0,
          imagesLength:0
      }
    },
    methods: {
      imgLoad(){
        // console.log('___');
        if(++this.counter === this.imagesLength){
        this.$emit('imageLoad')
       
        }
      }
    },
   watch: {
     detailInfo(){
       this.imagesLength = this.detailInfo.detailImage[0].list.length
        //console.log(this.imagesLength);
     }
   }
}
</script>
<style lang="less" scoped>
.detail-goods-title{
  text-align: left;
  font-size: 0.4rem;
  padding: 10px;
}
.info-key{
    text-align: left;
    padding: 0.3rem;
    font-size: 0.35rem;
}
.list-info img{
  width: 100%;
}
</style>
