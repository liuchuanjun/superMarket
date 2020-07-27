<template lang="html">
  <div class="">
    <Swiper :slideList = "imgList"/>
    <h2>我是购物车</h2>
  </div>

</template>

<script>
import Swiper from 'components/content/swiper/Swiper'
export default {
  name: 'shop',
  components: {
    Swiper
  },
  data() {

    return {

      imgList: [
        {"id":0,"image":require('@/assets/img/banner/timg.jpg')} ,
        {"id":1,"image":require('@/assets/img/banner/timg1.jpg')} ,
        {"id":2,"image":require('@/assets/img/banner/timg2.jpg')} ,
        {"id":3,"image":require('@/assets/img/banner/timg3.jpg')} ,
        {"id":4,"image":require('@/assets/img/banner/timg4.jpg')} ,
        {"id":5,"image":require('@/assets/img/banner/timg5.jpg')}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
