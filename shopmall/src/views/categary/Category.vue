<template>
  <div class="categary">
    <nav-bar class="category-nav">
     <template v-slot:center>
       <div class="category-center">分类</div>
     </template>
    </nav-bar>
    <div class="category-content">
    <category-titles 
    :lefttitles="lefttitles" 
    @categoryClick="categoryClick" 
    class="left"
    ></category-titles>
    <category-right 
    :rightCategoryList="rightCategoryList"
    class="right"
    ></category-right>
    </div>
  </div>
</template>
<script>
import NavBar from "../../components/NavBar/NavBar"

import CategoryTitles from "./childCom/CategoryTitles"
import CategoryRight from "./childCom/CategoryRight"
import {getCategory,getCategoryRight} from "../../components/network/category"
export default {
  name: "Categary",
  data(){
    return {
     lefttitles:[],
     rightCategoryList: [],
     currentIndex: 0
    }
  },
  components:{
    CategoryTitles,
    NavBar,
    CategoryRight
  },
  created() {
      getCategory().then(res=>{
        //console.log(res.data.data.category.list);
        this.lefttitles = res.data.data.category.list;
        this.$nextTick(() => {
          this.getCategoryRight(this.lefttitles[0].maitKey);
         })
      }); 

  },
  methods:{
   categoryClick({ maitKey, index }){
       //console.log(maitKey,index);
       //获取到对应内容的数据
         this.getCategoryRight(maitKey);
    },
    
    getCategoryRight(key){
      getCategoryRight(key).then(res=>{
        //打印获取到的数据
        //console.log(res);
        this.rightCategoryList= [...res.data.data.list];
        console.log(this.rightCategoryList);
      })
    },
  }

}
</script>
<style lang="less" scoped>
.category-nav{
  background-color: #0654fc;
}
.category-center{
  color: #fff;
  font-size: 0.5rem;
}
.category-content{
  display: flex; 
  justify-content: space-around;
}
.category-content .right{
 width: 80%;
}
.category-content .left{
 width: 20%;
}
.category-content{
  height: calc(100vh - 104px);
  position: relative;
  overflow: hidden;
}
</style>
