<template>
    <div class="detail-container">
        <Naver :titles='titles'/>
        <Swiper :slideList = "topImages"></Swiper>
    </div>
</template>

<script>
import Naver from './childComps/DetailNaver'
import Swiper from 'components/content/swiper/Swiper'

export default {
    name:'detail',
    components: {
        Naver,
        Swiper
    },
    data() {
        return {

            titles: ['商品','参数','评论','推荐'],
            currentId:null,
            topImages: []
        };
    },
    props: {

    },
    created() {

        this.currentId = this.$route.params.id

        this.topImages = this.$test.detailMore[this.currentId].imgaes

    },
    mounted() {


    },
    methods: {

    }
};
</script>

<style lang='scss' scoped>

    .detail-container {

        position: relative;
        z-index: 9;
        width: 100%;
        height: 100vh;

        background-color: #fff;
    }

</style>
