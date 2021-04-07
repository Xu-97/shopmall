<template>
    <div class="comment-info" v-if="Object.keys(commentinfo).length !== 0 ">
       <div class="comment-title">
        <div class="left">
          用户评价
        </div>
        <div class="right">
         更多
         </div>
       </div>
       <div class="user-comment">
        <div class="user-img">
        <img :src="commentinfo.user.avatar" alt="">
         <span>{{commentinfo.user.uname}}</span>
        </div>
        <div class="user-comment">
         {{commentinfo.content}}
        </div>
        <div class="user-detail">
          <span> {{commentinfo.style}}</span>
          <!--<span>{{fmt.format(commentinfo.created,'yyyy-MM-dd hh:mm:ss')}}</span>-->
          <span>{{commentinfo.created | showDate}}</span>
        </div>
        <div class="user-goods-img">
         <img 
          v-for="(item,index) in commentinfo.images" :key="index"
         :src="item" alt="" >
        </div>
       </div>
    </div> 
</template>
<script>
export default {
    name: 'CommentInfo',
    props: {
         commentinfo: {
             type: Object,
             default(){
                 return{}
             }
         }
    },
    filters: {
      showDate(value){
        const date = new Date(value*1000);
        return date
      }}
}
</script>
<style lang="less" scoped>
.comment-title{
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    height: 40px;
    background: #f0ebeb;
    border-top: 1px solid #cecbcb;
    border-bottom: 1px solid #cecbcb;;
    /*border: 1px solid #cecbcb;*/
    }
    .user-img{
    display:flex ;
    align-items: center;
        padding: 5px;
    img{
        width: 1rem;
    height: 1rem;
    border-radius: 50%;}
    span{
     font-weight: 600;
     color: #000;
    }
    }
    .user-comment{
     text-align: left;
     padding: 5px;
    }
    .user-goods-img{
      display: flex;
      flex-wrap: wrap;
      img{
      width: 60px;
      height: 60px;
      }
    }
</style>