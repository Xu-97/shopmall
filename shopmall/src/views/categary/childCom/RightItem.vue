<template>
    <div class="right-item">
      <div class="item-img">
        <img :src="item.image" alt="">
      </div>
      <div class="item-text">
         <span>{{item.title}}</span>
      </div> 
    </div>
</template>
<script>
export default {
    name:"RightItem",
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style lang="less" scoped>
.right-item img{
     width: 3rem;
    padding: 0.3rem;
}
</style>