<template>
  <div class="list-item">
   <check-button class="button" :isActive="product.checked" @click.native="buttonClick"></check-button>
   <div class="image-box">
   <img :src="product.image" alt="">
   </div>
   <div class="base-info">
     <div class="title">
     <p>{{product.title}}</p>
     </div>
    <div class="price">￥{{product.price}}</div>
      <div class="count">×{{product.count}}</div>
    </div>
  </div>
</template>
<script>
import CheckButton from "../../../components/checkButton/CheckButton"
export default {
    name: 'ListItem',
    props: {
       product: {
           type:Object,
           default(){
               return {}
           }
       }
    },
    components: {
         CheckButton
    },
    methods: {
        buttonClick(){
            //console.log(this.product.checked);
            this.product.checked = !this.product.checked
        }
    }

}
</script>
<style lang="less" scoped>
.list-item{
display: flex;
justify-content: space-around;
border-bottom: 1px solid #ccc;
padding-top:0.5rem;
}

.base-info{
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-around;
}
  .title p{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
.list-item .image-box img{
 width: 3rem;
}
.image-box{
width: 30%;
}
.price{
font-size: 0.6rem;
color: #3b0fea;

}
.count{
    color: #cf0000;
    font-size: 0.4rem;
    font-weight: 600;
    }
    .button{
    width: 10%;
    }

</style>