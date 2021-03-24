<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="index" class="tabcontrol" 
    :class="{active:index===currentIndex}"
    @click="itemClick(index)"
    >
     <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
    name: 'TabControl',
    props: {
        titles:{
            type: Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            currentIndex: 0,
        }
    },
    methods:{
        itemClick(index){
          //console.log(index);
          this.currentIndex = index;
          this.$emit("tabClick",index);
        }
    }
}
</script>
<style lang="less" scoped>
.tabcontrol{
display: flex;
justify-content: space-around;
background: #ffffff;
width: 100%;
span{
font-size: 0.95em;
font-weight: bold;
 padding: 2px 0;
}
}
.active{
color: #cf0000;
}
.active span {
 border-bottom: 2px solid #cf0000;

}
</style>