<template>
<<<<<<< HEAD
        <!-- <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in slideList" :key="index">
                    <img :src="item.image" alt="">
                </div>
            </div>
        <div class="swiper-pagination" slot="pagination" ref="pagenations"></div>
        
        </div> -->

        <swiper :options='swiperOption'>
            <swiper-slide v-for="(item,index) in slideList" :key="index">
                <img :src="item.image" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

=======
    <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in slideList" :key="index">
                <img :src="item.image" alt="">
            </div>
            <div class="swiper-pagination" slot="pagination" ref="pagenations"></div>
        </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination" slot="pagination" ref="pagenations"></div>
    
    </div>
>>>>>>> 0eb2e8a2ed2a115508de7c8d0d79c989d600ec63
</template>

<script>

// import Swiper from 'swiper';
// import 'swiper/swiper.scss';
// import 'swiper/swiper-bundle.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components:{
        swiper, 
        swiperSlide 
    },
    data() {
      return {       
<<<<<<< HEAD
          swiper: null,
          swiperOption:{
              pagination: {
                el: '.swiper-pagination',
                clickable:true,
            },
            slidePerView: 1,
            autoplay:{
                delay:10000,
                disableOnIntetaction: false
            },
            spaceBetween: 30,
            loop: true
          }
=======
            swiper: null
>>>>>>> 0eb2e8a2ed2a115508de7c8d0d79c989d600ec63
        }
    },
    props: {

        slideList: {
            type: Array,
            default: () => []
        }
    },
    methods:{

        
    },
    mounted() {

<<<<<<< HEAD
=======
        this.swiper = new Swiper(this.$refs.swiper, {
            direction : 'horizontal',
            loop: true,
            speed:800,
            effect:'coverflow',          //滑动效果
            touchAngle : 30,
            pagination: {
                el: this.$refs.pagination,
                clickable:true,
                type:'bullets',
            },
            autoplay: 3000
        })
>>>>>>> 0eb2e8a2ed2a115508de7c8d0d79c989d600ec63
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

    .swiper-pagination {
        
        

    }

    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {

            &.swiper-pagination-bullet-active {
            
            opacity: 1;
            background: red !important;
        }
    }

    
</style>
