<template>
    <div class="itemNav" @click="itemClick">
      <div v-if="!isActive"><slot  name="item-icon"></slot></div>
      <div  v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot  name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:"TabBarItem",
    props: {
      path: String,
      activeColor: {
      type: String,
      default: '#cf0000'
    },
    },
    data(){
        return{
            // isActive: true,
        }
    },
    computed:{
      isActive(){
          return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
          return this.isActive ? {color:this.activeColor} : {};
      }
    },
    methods: {
        itemClick(){
            //console.log('itemClick');
            this.$router.replace(this.path);
            //console.log(this.$router);
        },

    }
}
</script>
<style lang="less" scoped>
  .itemimg {
     width: 40px;
     height: 40px;
     img{
       width: 100%;
     }
  }

</style>