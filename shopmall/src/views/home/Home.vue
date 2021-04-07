<template>
  <div id="home">
  <nav-bar class="home-nav"><template v-slot:center><span>购物街</span></template></nav-bar>
  <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" 
  ref="tabControl1"
    class="tab-control" v-show="isTabFixed"></tab-control>
   <scroll class="content" ref="scroll" 
   :probe-type="3" 
   @scroll="contentScroll"
   :pull-up-load="true"
   @pullingUp="loadMore"
   >
   <!--  @pullingUp="loadMore" -->
   <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
   <recommend :recommends="recommends"></recommend>
   <feature></feature>
   <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" 
   ref="tabControl2"
   ></tab-control>
   <!--  :class="{'fixed': isTabFixed}"   ref="tabControl"-->
   <good-list :goods="showGoods"></good-list>
   </scroll>
   <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
 
</template>
<script>
// @ts-ignore
import NavBar from "../../components/NavBar/NavBar"
// @ts-ignore
import HomeSwiper from "./childCom/HomeSwiper"
import Recommend  from "./childCom/Recommend"
import Feature from "./childCom/Feature"

import {getHomeMultidata, getHomeGoods} from "../../components/network/home"

import {debounce} from "../../components/untils/untils"

import TabControl from "../../components/TabControl/TabControl"
import GoodList from "../../components/Goods/GoodList"
import BackTop from "../../components/backtop/BackTop"
// 引入组件插件
import Scroll from "../../components/scroll/Scroll"
// 引入基础的css
import "../../assets/css/base.css"
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodList,
    Scroll,
    BackTop 
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods: {
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType: 'pop',
      isShowBackTop:false,
      // 给个变量来存储tabControl 的offSettop
      tabOffSetTop:0,

      isTabFixed:false
}
  },
  created(){
    getHomeMultidata().then(res =>{
      this.banners =res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    })
    // .catch(err =>{
    //   console.log(err);
    // })
     // 请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      //开始监听goodlistitem图片加载完成
      // this.$bus.$on('imageLoad',()=>{
      //   //console.log('-----');
      //     //this.$refs.scroll.refresh()
      //       this.$refs.scroll.refresh();
      // })
   
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,200)
            //开始监听goodlistitem图片加载完成
      this.$bus.$on('imageLoad',()=>{
        //console.log('-----');
          //this.$refs.scroll.refresh()
            //this.$refs.scroll.
            refresh();
      })

      
  },

  methods: {
    // 其他事件监听方法
    tabClick(index){
       //console.log(index);
       switch(index) {
         case 0:
           this.currentType = "pop"
           break
         case 1:
           this.currentType = "new"
           break
         case 2:
           this.currentType = "sell"
           break
       }
       this.$refs.tabControl1.currentIndex = index;
       this.$refs.tabControl2.currentIndex = index;
    },
    // 网络请求相关方法
     getHomeGoods(type){
       const page = this.goods[type].page+1 ;
       getHomeGoods(type,page).then(res=>{
           //console.log(res.data.data.list);
            this.goods[type].list.push(...res.data.data.list);
            this.goods[type].page += 1;
            this.$refs.scroll.finishPullUp()
       })
     },
    //  返回顶部以及吸顶效果
    backClick(){
       this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
     //console.log(position);
    // 判断backTop是否显示
     //position.y > 1000
     this.isShowBackTop = Math.abs(position.y) > 800
       this.isTabFixed =  Math.abs(position.y)  >  this.tabOffSetTop
    },

    // 上拉加载
    loadMore(){
      //console.log(this.getHomeGoods(this.currentType));
      this.getHomeGoods(this.currentType);
      // this.$refs.scroll.scroll.refresh();
      //console.log('more');
    },
    
   finishPullUp(){
      this.scroll && this.scroll.finishPullUp();
   },

  //  吸顶效果必须获得tabControl 的offSetTop,为了防止轮播图影响，就监听HomeSwiper 中的轮播图的加载完成
    swiperImageLoad(){
            // 获取tabConTrol
      //$el 获取组件中的元素
       // this.tabOffSetTop = 
          //console.log( this.$refs.tabControl.$el.offsetTop);
          this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop;
          //console.log( this.tabOffSetTop );
    }
    
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
  

}

</script>
<style lang="less" scoped>
#home{
  height: 100vh;
   .home-nav{
     background: #eb2f94;
     color: #fff;
     font-size: 0.5rem;
   }
}
.content{
 /*height:calc(100% - 104px);
 height: 300px;*/
 overflow: hidden;
 position: absolute;
 top: 44px;
 bottom: 60px;
 left: 0;
 right: 0;
  
}
.tab-control{
position: relative;
z-index: 9;
margin-top: 0;
height: 35px;
  line-height: 35px;

}
</style>