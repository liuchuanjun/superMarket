<template lang="html">
  <Banner :slideList = "imgList" slidTime = "3000">
  </Banner>
</template>

<script>
import Banner from 'components/common/banner/Banner'

export default {
  name: 'home',
  components: {
    Banner,
  },
  data(){
    return {
      imgList: [
        {"id":0,"image":require('@/assets/img/timg.jpg')} ,
        {"id":1,"image":require('@/assets/img/timg1.jpg')} ,
        {"id":2,"image":require('@/assets/img/timg2.jpg')} ,
        {"id":3,"image":require('@/assets/img/timg3.jpg')} ,
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
