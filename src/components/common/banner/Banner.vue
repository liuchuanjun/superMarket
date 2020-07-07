<template>
<div class="carousel-wrap carousel-height" id="carousel">
<!-- <transition-group tag="ul" class='slide-ul' name="list">
  <li v-for="(list,index) in slideList"
  v-bind:key="list.id"
  v-show="index===currentIndex"
  @mouseover="stop"
  @mouseleave="go"
  @touchstart.prevent.stop="handleStart"
  @touchmove.prevent.stop="handleMove"
  @touchend.prevent.stop="handleEnd">
    <a href="#" >
      <img :src="list.image">
    </a>
  </li>
</transition-group> -->
<ul class='slide-ul' name="list">
  <li v-for="(list) in slideList"
  v-bind:key="list.id"
  @mouseover="stop"
  @mouseleave="go"
  @touchstart.prevent.stop="handleStart"
  @touchmove.prevent.stop="handleMove"
  @touchend.prevent.stop="handleEnd">
    <a href="#" >
      <img :src="list.image">
    </a>
  </li>
</ul>
<div class="carousel-items">
  <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)" :key="index"></span>
</div>
</div>
</template>
<script>
export default {
  data() {
  return{
    currentIndex:0,//图片索引
    timer: null,
    startX: 0,
    disX: 0
  }
},
props: {
  slideList: {
    type: Array,
    default: () => []
  },
  slidTime: {
    type: String,
    default: "3000"
  }
},
methods:{
  go() {
    this.timer = setInterval(() => {
      this.autoPlay()
    }, this.slidTime)
  },
  stop() {
    clearInterval(this.timer)
    this.timer = null
  },
  change(index) {
    this.currentIndex = index
  },
  autoPlay() {
    this.currentIndex++
    if (this.currentIndex > this.slideList.length - 1) {
      this.currentIndex = 0
    }
  },
  handleStart(e){

    clearInterval(this.timer)
    this.timer = null
    this.startX = e.changedTouches[0].clientX;
  },
  handleMove(e){

    clearInterval(this.timer)

    this.disX = e.changedTouches[0].clientX - this.startX
  },
  handleEnd(e){

    this.disX = e.changedTouches[0].clientX - this.startX

    if(this.disX < 0){

      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
      else {
        this.currentIndex++
      }
    }
    else if(this.disX > 0){

      if (this.currentIndex == 0) {
        this.currentIndex = this.slideList.length - 1
      }
      else {

        this.currentIndex--
      }
    }
    this.timer = setInterval(() => {
      this.autoPlay()
    }, this.slidTime)
  }
},
mounted() {
  //在DOM加载完成后，下个tick中开始轮播
  this.$nextTick(() => {
    this.timer = setInterval(() => {
    //this.autoPlay()
    }, this.slidTime)
  })
}
}
</script>
<style lang="scss" scoped>

// .carousel-wrap {
//   position: relative;
//   height:30rem;
//   width: 100%;
//   overflow: hidden;
//   // 删除
//   background-color: #fff;
//   }
// @media screen and (max-width:768px){
//   .carousel-height{
//   height:17rem;
//   }
// }
// @media screen and (max-width:992px) and (min-width: 768px){
//   .carousel-height{
//   height:30rem;
//   }
// }
// .slide-ul {
//   width: 100%;
//   height: 100%;
//   li {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       img {
//       width: 100%;
//       height: 100%;
//     }
//   }
// }
//
.carousel-wrap {
  position: relative;
  height:30vh;
  width: 100vw;
  overflow: hidden;
  background-color: #fff;
}

.slide-ul {

  position: absolute;
  width: 100%;
  height: 30vh;

  left: 0;

  display: flex;

  li {

    width: 100vw;
    height: 100%;

    img {

      width: 100vw;
      height: 100%;
      object-fit: cover;
    }
  }
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 90%;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  span {
    display: inline-block;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #b2b2b2;
    cursor: pointer;
    margin: 0 6px;
  }
  .active {
    background-color: blue;
  }
}

// .carousel-items {
//   position: absolute;
//   z-index: 10;
//   top: 90%;
//   width: 100%;
//   margin: 0 auto;
//   text-align: center;
//   font-size: 0;
//   span {
//     display: inline-block;
//     height: 0.4rem;
//     width: 2rem;
//     margin: 0 0.3rem;
//     background-color: #b2b2b2;
//     cursor: pointer;
//   }
//   .active {
//     background-color: blue;
//   }
// }
//   .list-enter-to {
//     transition: all 1s ease;
//     transform: translateX(0);
//   }
//
// .list-leave-active {
//   transition: all 1s ease;
//   transform: translateX(-100%)
// }
//
// .list-enter {
//   transform: translateX(100%)
// }
//
// .list-leave {
//   transform: translateX(0)
// }
</style>
