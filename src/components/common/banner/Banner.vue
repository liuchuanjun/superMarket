<template lang="html">
  <div class="swiper-container">
    <div class="swiper-warp">
      <img src="@/assets/img/timg.jpg" alt="">
      <img src="@/assets/img/timg1.jpg" alt="">
      <img src="@/assets/img/timg2.jpg" alt="">
      <img src="@/assets/img/timg3.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.swiper-container {
  width: 100%;
  height: 38vh;

  position: relative;

  background-color: yellow;
}

.swiper-container .swiper-warp {

  position: absolute;
  height: 100%;
  overflow-x: hidden;
}

.swiper-container .swiper-warp img {

  width: 100vw;
  height: 100%;
}
</style>
