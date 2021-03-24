<template>
  <div class="wrapper" ref="wrapper">
      <ul class="content">
           <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
       <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
       <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> <li>分类列表1</li>
        <li>分类列表1</li> <li>分类列表1</li> 
        <li>分类列表1</li> <li>分类列表1</li>
         <li>分类列表1</li> <li>分类列表1</li> 
         <li>分类列表1</li> <li>分类列表1</li>
          <li>分类列表1</li> <li>分类列表1</li> 
          <li>分类列表1</li> <li>分类列表1</li> 
          <li>分类列表1</li> <li>分类列表1</li> 
          <li>分类列表1</li> <li>分类列表1</li> 
          <li>分类列表1</li> <li>分类列表1</li> 
       <li>分类列表1</li>
    
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
       <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
       <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
      <li>分类列表1</li>
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> 
       <li>分类列表1</li> <li>分类列表1</li>
        <li>分类列表1</li> <li>分类列表1</li> 
        <li>分类列表1</li> <li>分类列表1</li>
         <li>分类列表1</li> <li>分类列表1</li> 
         <li>分类列表1</li> <li>分类列表1</li>
          <li>分类列表1</li> <li>分类列表1</li> 
          <li>分类列表1</li> <li>分类列表1</li> 
          <li>分类列表1</li> <li>分类列表1</li> 
          <li>分类列表1</li> <li>分类列表1</li> 
          <li>分类列表1</li> <li>分类列表1</li> 
       <li>分类列表1</li>
       </ul>
     
    
  </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
  name: "Categary",
  data(){
    return {
       scroll:null
    }
  },
  created() {

  },
  mounted() {
      this.scroll =   new BScroll(this.$refs.wrapper,{
        probeType:3
    })
    this.scroll.on('scroll',(position)=>{
      console.log(position);
    })
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  height: 150px;
  background: red;
}
</style>
