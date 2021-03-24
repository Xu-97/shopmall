<template>
  <div class="detail" id="detail">
 
   <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
   <scroll class="scroll-content" ref="scroll" @scroll="scrollTop">
   <detail-swiper :top-images="topImages"></detail-swiper>
   <detail-base-info :goods="goods"></detail-base-info>
   <detail-shop-info :shop="shop"></detail-shop-info>
   <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
   <goods-params ref="params" :params="params"></goods-params>
   <comment-info ref="comment" :commentinfo="commentinfo"></comment-info>
   <detail-recommend ref="recommend" :recommend="recommend"></detail-recommend>
   </scroll>
   <back-top @click.native="backClick" v-show="isShowBackTop" ></back-top>
   <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>

  </div>
</template>
<script>
// 引入子组件
import DetailNavBar from "./childCom/DetailNavBar"
import DetailSwiper from "./childCom/DetailSwiper"
import DetailBaseInfo from "./childCom/DetailBaseInfo"
import DetailShopInfo from "./childCom/DetailShopInfo"
import DetailGoodsInfo from "./childCom/DetailGoodsInfo"
import GoodsParams from "./childCom/GoodsParams"
import CommentInfo from "./childCom/CommentInfo"
import DetailRecommend from "./childCom/DetailRecommend"
import DetailBottomBar from "./childCom/DetailBottomBar"
// 引入Bscroll
import Scroll from  "../../components/scroll/Scroll"
// 引入Toast
// import Toast from "../../components/Toast/Toast"
//引入回到顶部组件
import BackTop from "../../components/backtop/BackTop.vue"
// 请求数据
import {getDetail,Goods,Shop,Params,getRecommned} from "../../components/network/detail"
// 引入防抖函数
import { debounce } from '../../components/untils/untils'
// 引入
import {mapActions} from 'vuex'
export default {
    name: 'Detail',
        components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      GoodsParams,
      CommentInfo,
      DetailRecommend,
      Scroll,
      DetailBottomBar,
      BackTop,
    //   Toast


    },
    data(){
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            params:{},
            commentinfo: {},
            recommend:[],
            //滚动到y的值
            titleTopsY:[],
            getTitleTops:null,
            currentIndex:0,
            isShowBackTop:false,
            message: '',
            show: false
        }
    },
    mounted(){

    },
    created(){

        this.iid = this.$route.params.iid;
        //console.log(this.iid);
        // 根据iid获取请求的数据
        getDetail(this.iid).then(res =>{
            console.log(res);
            const data = res.data.result
            //获取顶部的图片
            this.topImages = data.itemInfo.topImages;
            //console.log(this.topImages);
            // 获取商品信息
            this.goods =  new Goods(data.columns,data.itemInfo,data.skuInfo.services);
           console.log( this.goods);
            //获取店铺信息
            this.shop = new Shop(data.shopInfo);
            //console.log(this.shop);
            // 商品详情页下面的图片
            this.detailInfo = data.detailInfo;
            //console.log(this.detailInfo);
            this.params =  new Params(data.itemParams.info,data.itemParams.rule);
           // console.log(this.params);
           if(data.rate.Crate !==0){
            this.commentinfo = data.rate.list[0];
           }


        // 防抖操作
      this.getTitleTops = debounce(()=>{
                        this.titleTopsY = [];
         this.titleTopsY.push(0);
        this.titleTopsY.push(this.$refs.params.$el.offsetTop);
        this.titleTopsY.push(this.$refs.comment.$el.offsetTop);
        this.titleTopsY.push(this.$refs.recommend.$el.offsetTop)
        console.log( this.titleTopsY);
      },100)
        
            //console.log(this.commentinfo);
        })
                getRecommned().then(res=>{
            //console.log(res);
            this.recommend = res.data.data.list;
            //console.log(this.recommend);
        })


    },
    methods:{
        ...mapActions(['addCart']),
        imageLoad(){
            //console.log("aaa");
            this.$refs.scroll.refresh();
         this.getTitleTops()
        },
        titleClick(index){
            //console.log(index);
           this.$refs.scroll.scrollTo(0,-this.titleTopsY[index],100)
        },
        scrollTop(position){
             // console.log(position);
             const positionY = Math.abs(position.y);
             //console.log(positionY);
             let length = this.titleTopsY.length;
             for(var i = 0; i <this.titleTopsY.length; i++){
                 if(
        (i<length-1 && positionY > this.titleTopsY[i]&& positionY< this.titleTopsY[i+1]) || (i===length-1 && positionY >this.titleTopsY[i]) 
                 )
                 {
                     this.currentIndex = i;
                     this.$refs.nav.currentIndex = this.currentIndex;
                  // console.log(this.currentIndex);
                 }
             }
             this.isShowBackTop = Math.abs(position.y) > 800
        },
            backClick(){
       this.$refs.scroll.scrollTo(0,0)

    },
    // 加入购物车
    addToCart(){
       // console.log('addToCart');
       const product = {};
       product.image =  this.topImages[0];
       product.price = this.goods.price;
       product.desc = this.goods.desc;
       product.title = this.goods.title;
       product.price= this.goods.nowPrice;
       product.iid = this.iid;
        console.log( this.$store);
       // this.$store.dispatch('addCart',product)
            this.addCart(product).then(res =>{
                // this.show = true;
                // this.message = res;
                // //console.log(res);
                // setTimeout(()=>{
                //   this.show = false;
                //   this.message ='';
                // },1000)
                 this.$toast.showClick(res,2000)
                //console.log(this.$toast.show());
            })
       
    
    }
    },

}
</script>
<style lang="less" scoped>
#detail{
    position: relative;
    background: #ffffff;
    z-index: 9;
    height: 100vh;
}
.scroll-content{
   height: calc(100% - 88px);   
}
.detail-nav{
    position: relative;
    z-index: 9;
    background: #ffffff;
}
</style>

