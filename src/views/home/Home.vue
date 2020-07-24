<template lang="html">
  <div class="">
    <Naver>
      <div slot="item-center" class="">购物车</div>
    </Naver>
    <Scroll class="scroll-content" :probeType="3" ref="scroll" @arrowShow='arrowShow'>
      <!--Banner :slideList = "imgList" slidTime = "3000"/-->
      <Swiper :slideList = "imgList"/>
      <PopItemShow :popImgs="popImags" />
      <TabControl :titles = "titles" @tabControlClick="tabControlClick"/>
      <PetList :petLists = "petLists[switchTitle]" />
    </Scroll>
    <ArrowTop @click.native="arrowClick" v-show="showArrowTop" />
  </div>

</template>

<script>
//import Banner from 'components/common/banner/Banner'
import Swiper from 'components/content/swiper/Swiper'
import Naver from 'components/common/navbar/Navbar'
import TabControl from 'components/content/tabControl/TabControl'
import PetList from 'components/content/petList/PetList'
import Scroll from 'components/common/scroll/Scroll'
import ArrowTop from 'components/content/arrowTop/ArrowTop'

import PopItemShow from './homeComponents/PopItemShow'

export default {
  name: 'home',
  components: {
    //Banner,
    Swiper,
    Naver,
    PopItemShow,
    TabControl,
    PetList,
    Scroll,
    ArrowTop
  },
  data(){
    return {
      imgList: [
        {"id":0,"image":require('@/assets/img/banner/timg.jpg')} ,
        {"id":1,"image":require('@/assets/img/banner/timg1.jpg')} ,
        {"id":2,"image":require('@/assets/img/banner/timg2.jpg')} ,
        {"id":3,"image":require('@/assets/img/banner/timg3.jpg')} ,
        {"id":4,"image":require('@/assets/img/banner/timg4.jpg')} ,
        {"id":5,"image":require('@/assets/img/banner/timg5.jpg')}
      ],
      popImags: [

        {"id":0,"title":"十点抢劵","image":require('@/assets/img/pop/pop1.jpg')} ,
        {"id":1,"title":"好物特卖","image":require('@/assets/img/pop/pop2.jpg')} ,
        {"id":2,"title":"内购福利","image":require('@/assets/img/pop/pop3.jpg')} ,
        {"id":3,"title":"初秋上新","image":require('@/assets/img/pop/pop4.jpg')}
      ],
      titles: ["Dog","Cat","Tiger"],
      switchTitles:['dog','cat','tiger'],
      switchTitle: 'dog',
      petLists: {
        dog: {
          "page": 0,
          "list": [
            {"id":0,"title":"宠物01","image":require('@/assets/img/dog/dog1.jpg')} ,
            {"id":1,"title":"宠物02","image":require('@/assets/img/dog/dog2.jpg')} ,
            {"id":2,"title":"宠物03","image":require('@/assets/img/dog/dog3.jpg')} ,
            {"id":3,"title":"宠物04","image":require('@/assets/img/dog/dog4.jpg')} ,
            {"id":4,"title":"宠物05","image":require('@/assets/img/dog/dog5.jpg')} ,
            {"id":5,"title":"宠物06","image":require('@/assets/img/dog/dog6.jpg')} ,
            {"id":6,"title":"宠物07","image":require('@/assets/img/dog/dog7.jpg')} ,
            {"id":7,"title":"宠物08","image":require('@/assets/img/dog/dog8.jpg')},
            {"id":8,"title":"宠物09","image":require('@/assets/img/dog/dog9.jpg')} ,
            {"id":9,"title":"宠物10","image":require('@/assets/img/dog/dog10.jpg')} ,
            {"id":10,"title":"宠物11","image":require('@/assets/img/dog/dog11.jpg')} ,
            {"id":11,"title":"宠物12","image":require('@/assets/img/dog/dog12.jpg')} ,
            {"id":12,"title":"宠物13","image":require('@/assets/img/dog/dog13.jpg')} ,
            {"id":13,"title":"宠物14","image":require('@/assets/img/dog/dog14.jpg')} ,
            {"id":14,"title":"宠物15","image":require('@/assets/img/dog/dog15.jpg')} ,
            {"id":15,"title":"宠物16","image":require('@/assets/img/dog/dog16.jpg')}
          ]
        },
        cat: {
          "page": 0,
          "list": [
            {"id":0,"title":"宠物01","image":require('@/assets/img/cat/cat1.jpg')} ,
            {"id":1,"title":"宠物02","image":require('@/assets/img/cat/cat2.jpg')} ,
            {"id":2,"title":"宠物03","image":require('@/assets/img/cat/cat3.jpg')} ,
            {"id":3,"title":"宠物04","image":require('@/assets/img/cat/cat4.jpg')} ,
            {"id":4,"title":"宠物05","image":require('@/assets/img/cat/cat5.jpg')} ,
            {"id":5,"title":"宠物06","image":require('@/assets/img/cat/cat6.jpg')} ,
            {"id":6,"title":"宠物07","image":require('@/assets/img/cat/cat7.jpg')} ,
            {"id":7,"title":"宠物08","image":require('@/assets/img/cat/cat8.jpg')}
          ]
        },
        tiger: {
          "page": 0,
          "list": [
            {"id":0,"title":"宠物01","image":require('@/assets/img/tiger/tiger1.jpg')} ,
            {"id":1,"title":"宠物02","image":require('@/assets/img/tiger/tiger2.jpg')} ,
            {"id":2,"title":"宠物03","image":require('@/assets/img/tiger/tiger3.jpg')} ,
            {"id":3,"title":"宠物04","image":require('@/assets/img/tiger/tiger4.jpg')} ,
            {"id":4,"title":"宠物05","image":require('@/assets/img/tiger/tiger5.jpg')} ,
            {"id":5,"title":"宠物06","image":require('@/assets/img/tiger/tiger6.jpg')} ,
            {"id":6,"title":"宠物07","image":require('@/assets/img/tiger/tiger7.jpg')} ,
            {"id":7,"title":"宠物08","image":require('@/assets/img/tiger/tiger8.jpg')}
          ]
        }

      },
      showArrowTop: false
    }
  },
  methods: {

    /**
     * 选项卡数据的切换
     */
    tabControlClick(index){

      this.switchTitle = this.switchTitles[index]
    },

    /**
     * 点击箭头回到页面顶部
     */
    arrowClick(){

      this.$refs.scroll.scroolTo(0,0,500);
    },

    /**
     * 什么时间显示箭头
     */
    arrowShow(position){

      this.showArrowTop = -position.y > 600
    }
  },
  watch: {

    
  }
}
</script>

<style lang="css" scoped>

.scroll-content {

  position: absolute;
  top: 49px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
