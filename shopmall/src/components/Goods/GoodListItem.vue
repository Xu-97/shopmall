<template>
    <div class="goodlistitem" @click="goodsItemClick">
   
      <div class="goodsimg"><img v-lazy="goodsItem.show.img" alt="" @load="imageLoad"></div>
      <div class="goodsname"><p>{{goodsItem.title}}</p></div>
      <div class="goodsinformation">
      <span class="productprice">￥{{goodsItem.price}}</span>
      <span>{{goodsItem.cfav}}</span>
      </div>
      
     
    </div>
</template>
<script>
export default {
    name: "GoodListItem",
    props:{
     goodsItem: {
         type:Object,
         default(){
             return {}
         }
     }
    },
    methods:{
        imageLoad(){
            // console.log('imageLoad');
            this.$bus.$emit('imageLoad')
          
        },
        goodsItemClick(){
            //console.log('跳转详情页');
            this.$router.push('./detail/'+this.goodsItem.iid)
        }
    }
}
</script>
<style lang="less" scoped>
.goodlistitem{
width: 49%;
padding: 0 0.5em;

img{
    width: 100%;
}
}
.goodsname{
    height: 30px;
    line-height: 30px;
}
.goodsname p{
    white-space: nowrap;   
text-overflow:ellipsis;
overflow:hidden;
}
.goodsinformation{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30px;
    .productprice{
        color: #d80000;
        font-size: 15px;
        font-weight: bold;
    }
}
</style>