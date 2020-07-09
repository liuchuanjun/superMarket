<template lang="html">
  <div class="">
    <Naver>
      <div slot="item-center" class="">购物车</div>
    </Naver>
    <Banner :slideList = "imgList" slidTime = "3000"/>
  </div>

</template>

<script>
import Banner from 'components/common/banner/Banner'
import Naver from 'components/common/navbar/Navbar'

export default {
  name: 'home',
  components: {
    Banner,
    Naver
  },
  data(){
    return {
      imgList: [
        {"id":0,"image":require('@/assets/img/timg.jpg')} ,
        {"id":1,"image":require('@/assets/img/timg1.jpg')} ,
        {"id":2,"image":require('@/assets/img/timg2.jpg')} ,
        {"id":3,"image":require('@/assets/img/timg3.jpg')} ,
        {"id":4,"image":require('@/assets/img/timg4.jpg')} ,
        {"id":5,"image":require('@/assets/img/timg5.jpg')}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
