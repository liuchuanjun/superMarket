<template lang="html">
  <div class="naver-container">
    <div class="naver-left"><slot name="item-left"></slot></div>
    <div class="naver-center"><slot name="item-center"></slot></div>
    <div class="naver-right"><slot name="item-right"></slot></div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
  .naver-container {

    position: relative;

    z-index: 10;

    display: flex;
    width: 100%;
    height: 49px;

    background-color: brown;

    .naver-left {

      width: 40px;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .naver-center {

      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;

      font-size: 20px;
      color: #fff;
      font-weight: 600;
    }

    .naver-right {

      width: 40px;
      height: 100%;
    }
  }
</style>
