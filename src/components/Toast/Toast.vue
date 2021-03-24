<template>
    <div class="toast"  v-show="show">
       <div>{{message}}</div>
    </div>
</template> 
<script>
export default {
    name: 'Toast',
    data(){
        return{
            message: '',
            show: false
        }
    },
    // props: {
    //     message: {
    //         type:String,
    //         default: ''
    //     },
    //     show: {
    //         type: Boolean,
    //         default(){
    //             return false
    //         }
    //     }
    // },
    methods: {
        showClick(message,duration) {
           this.show = true;
           this.message = message;
          setTimeout(()=>{
          this.message = '';
          this.show = false;
          },duration)
        }
    }
}
</script>
<style lang="less" scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    background: rgb(0, 0, .7);
    color: #ffffff;
    transform:translate(-50%,-50%);
    z-index: 999;
    padding: 10px;
}
</style>