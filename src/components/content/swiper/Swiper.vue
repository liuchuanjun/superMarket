<template>

        <swiper :options='swiperOption'>
            <swiper-slide v-for="(item,index) in slideList" :key="index">
                <img :src="item.image" alt="" @load="swiperLoad">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'

export default {
    components:{
        swiper,
        swiperSlide
    },
    data() {
      return {
          isLoad: false,
          swiperOption:{
              pagination: {
                el: '.swiper-pagination',
                clickable:true,
            },
            slidePerView: 1,
            autoplay:{
                delay:3000,
                disableOnIntetaction: false
            },
            spaceBetween: 30,
            loop: true
          }
        }
    },
    props: {

        slideList: {
            type: Array,
            default: () => []
        }
    },
    methods:{

        swiperLoad(){

            if(!this.isLoad){

                this.$emit("swiperLoad")
                this.isLoad = true;
            }
        }
    },
    mounted() {

    }
}
</script>

<style lang='scss' scoped>

  .swiper-container {

        height:30vh;
        width: 100vw;
        overflow: hidden;
        background-color: #fff;

        img {

            width: 100%;
            height: 100%;
        }
    }

    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {

            &.swiper-pagination-bullet-active {

            opacity: 1;
            background: red !important;
        }
    }


</style>
