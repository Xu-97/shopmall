<template>
  <div class="detail-nav">
  <nav-bar>
  <template v-slot:left>
    <div class="arrow" @click="backClick" >
        <img src="../../../assets/img/icon/arrow-left-bold.svg" alt="">
    </div>
  </template>
<template v-slot:center>
   <div class="title"><div v-for="(item,index) in titles" :key="index" :class="{'active': currentIndex==index}" @click="titleClick(index)">{{item}}</div></div>
</template>
  </nav-bar>
  </div>
</template>
<script>
import  NavBar from "../../../components/NavBar/NavBar"
export default {
    name: 'DetailNavBar',
    components: {
        NavBar
    },
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index;
            this.$emit('titleClick',index)
        },
        backClick(){
            this.$router.back()
        }
    }
}
</script>
<style lang="less" scoped>
 .detail-nav .title{
    display: flex;
    justify-content: space-around;
}
.active{
    color: #cf0000;
}

.arrow img{
   width: 28px;
   height: 28px;
   vertical-align: middle;
}
</style>
