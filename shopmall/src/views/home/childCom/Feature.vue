<template>
  <div class="feature">
    <h4>本周流行</h4>
    <div class="all">
      <div v-for="(item,index) in feature" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "Feature",
    data(){
      return{
          feature:[
             { 
                 image:require("../../../assets/img/home/01.png"),
                 title:"女装货源",
                 link:"https://m.hznzcn.com/gallery-150-grid.html"
             },
             { 
                 image:require("../../../assets/img/home/02.png"),
                 title:"男装货源",
                 link:"https://m.hznzcn.com/gallery-150-grid.html"
             },
             { 
                 image:require("../../../assets/img/home/03.png"),
                 title:"童装货源",
                 link:"https://m.hznzcn.com/gallery-150-grid.html"
             },
             { 
                 image:require("../../../assets/img/home/04.png"),
                 title:"毛衫货源",
                 link:"https://m.hznzcn.com/gallery-150-grid.html"
             },
             { 
                 image:require("../../../assets/img/home/05.png"),
                 title:"市场导航",
                 link:"https://m.hznzcn.com/gallery-150-grid.html"
             },
             { 
                 image:require("../../../assets/img/home/06.png"),
                 title:"闪电发货",
                 link:"https://m.hznzcn.com/gallery-150-grid.html"
             },
             { 
                 image:require("../../../assets/img/home/07.png"),
                 title:"每日新款",
                 link:"https://m.hznzcn.com/gallery-150-grid.html"
             },
             { 
                 image:require("../../../assets/img/home/08.png"),
                 title:"代理必读",
                 link:"https://m.hznzcn.com/gallery-150-grid.html"
             },

          ]
      }
    }
}
</script>
<style lang="less" scoped>
.feature{
 margin-top: 0.9em;
  .all{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div{
    width: 25%;
    padding: 5px 0;
    }
  }
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
   font-size: 0.8em;

  }
}
</style>