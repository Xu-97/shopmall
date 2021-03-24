<template>
<div>
     <div class="nav">
       <slot></slot>
    </div>
    </div>
</template>
<script>
export default {
    name: "Tabbar",

}
</script>
<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  font-size: 13px;
  background: #f8f5f5;  
  
}

</style>