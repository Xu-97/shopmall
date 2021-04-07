<template>
   <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="Detail">
     <router-view/>
     </keep-alive>
  </div>
</template>
<script>
// @ts-ignore
import MainTabBar from  "./components/MainTabBar";
export default {
  name: "App",
    components:{
     MainTabBar
    }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
