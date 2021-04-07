<template>
  <div class="goods-params" v-if="Object.keys(params).length !==0" >
   <div class="size-declare">
    {{params.key}}
   </div>
   <div class="table">
   <table class="info-size"  v-for="(table,index) in params.tables" :key="index">
     <tr v-for="(tr,indey) in table" :key="indey">
      <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
     </tr>
     
   </table>
    <table class="info-params">
         <tr v-for="(item,index) in params.set" :key="index">
           <td>{{item.key}}</td>
           <td>{{item.value}}</td>
         </tr>
    </table>
   </div>
  </div>
</template>
<script>
export default {
    name: 'GoodsParams',
    props: {
        params:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style lang="less" scoped>
.goods-params .size-declare{
    font-size: 0.4rem;
    text-align: left;
    padding: 10px;
}
.table table{
    width: 100%;
}
.table table tr,td{
    padding: 5px;
    font-size: 0.35rem;
}
.table .info-params tr td:nth-child(2){
 color: #ff00009e;;
}
</style>