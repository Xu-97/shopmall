<template>
  <div class="check-button">
   <div class="check-img">
    <img src="../../assets/img/others/button.png" alt="" v-if="isActive">
    <img src="../../assets/img/others/button-none.png" alt="" v-else>
    </div>
  </div>
</template>
<script>
export default {
    name: 'CheckButton',
    props: {
        isActive:{
            type: Boolean,
            default(){
                return false;
            }
        }
    },
    mounted(){
        //console.log(this.isActive);
    }
}
</script>
<style lang="less" scoped>
    .check-button img{
    width: 1rem;
    vertical-align: middle;
    }
</style>
