<template>
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
</template>

<script>

import Swiper from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

export default {
    data() {
      return {       
            swiper: null
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

</style>
