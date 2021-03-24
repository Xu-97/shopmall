<template>
    <div class="car-bottom-bar">
     <div class="check-all">
       <check-button :is-active="isSelectAll" @click.native="checkClick" ></check-button>
       <div class="check-title">全选</div>
     </div>
     <div class="total-price">
      总计:{{totalPrice}}
     </div>
     <div class="calculate" @click="calcClick">
        去计算: {{ checkLength}}
     </div>
    </div>
</template>
<script>
import CheckButton from "../../../components/checkButton/CheckButton"
export default {
    name: 'CartBottomBar',
    components: {
        CheckButton,
    },
    computed: {
        totalPrice(){
            return this.$store.state.cartList.filter(item =>{
                return item.checked;
            }).reduce((preValue,item) =>{
               return preValue +item.price *item.count
            },0).toFixed(2)
        },
        checkLength(){
            return this.$store.state.cartList.filter(item => item.checked).length;
        },
        isSelectAll(){
        //return  !(this.$store.state.cartList.filter(item => !item.checked).length)
        if(this.$store.state.cartList.length ==0) return false;
        return !(this.$store.state.cartList.find(item => !item.checked))
        }
    },
    methods: {
        checkClick(){
           // console.log("__");
           if(this.isSelectAll){
               this.$store.state.cartList.forEach(item => item.checked = false)
           }else {
               this.$store.state.cartList.forEach(item => item.checked = true)
           }
        },
        calcClick(){
            if(!this.isSelectAll){
                this.$toast.showClick('请选择购买的商品',2000)
            }
        }
    }
}
</script>
<style lang="less" scoped>
.car-bottom-bar{
    height: 44px;
    position: relative;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
}
.check-all{
    display: flex;
    align-items: center;
}
</style>