<template>
  <div class="detail-swiper">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-a">
      <swiper-slide v-for="(item,index) in  topImages" :key="index">
      <!--<a :href="item.link">-->
       <img :src="item" alt="" style="width:100%;" >
       <!--</a>-->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
    name: 'DetailSwiper',
    components: {
    swiper,
    swiperSlide
  },
    props: {
        topImages: {
            type:Array,
            default() {
                return []
            }
        }
    },
    data() {
    return {
      isLoad:false,
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      
    };
  },
    computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
}

</script>
<style lang="less" scoped>
.swiper-a{
    max-height: 450px;
    overflow: hidden;
}
</style>
