<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name: 'Scroll',
    props: {
      probeType:{
        type:Number,
        default: 3
      },
      pullUpLoad:{
        type: Boolean,
        default:false
      }
    },
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
      // 1.创建Bscroll 对象
          //setTimeout(()=>{
            this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            //probeType:this.probeType,
             probeType:3,
            pullUpLoad:this.pullUpLoad
          

        })
         /// },1000)
             //setTimeout(()=>{
      this.scroll.on('scroll',(position)=>{
     // console.log(position);
      this.$emit('scroll',position)
              })
           //  },1000)
          // setTimeout(()=>{
                this.scroll.on('pullingUp',()=>{
              //console.log(this.pullUpLoad);
              this.$emit('pullingUp')
                })
          // },1000)
        //  setTimeout(()=>{
        //     console.log(this.scroll);
        //  },1500) 

    },
    methods:{
        scrollTo(x,y, time=1000){
          this.scroll &&  this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
          this.scroll.finishPullUp()
        },
        refresh(){
          console.log("---");
        this.scroll &&  this.scroll.refresh()
        }
    }
}
</script>
<style lang="less" scoped>

</style>