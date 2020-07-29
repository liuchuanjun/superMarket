<template lang="html">
  <div class="">
    <Naver>
      <div slot="item-center" class="">Animal Panel</div>
    </Naver>
    <TabControl :titles = "titles"
                class="tab_control"
                @tabControlClick="tabControlClick" 
                ref="tabcontrol1"
                v-show="isShowTabcontrol"/>
    <Scroll class="scroll-content" :probeType="3" ref="scroll" @contentScroll='contentScroll' @pullingUp='loadMore'>
      <!--Banner :slideList = "imgList" slidTime = "3000"/-->
      <Swiper :slideList = "imgList" @swiperLoad='swiperLoad'/>
      <PopItemShow :popImgs="popImags" />
      <TabControl :titles = "titles" @tabControlClick="tabControlClick" ref="tabcontrol2"/>
      <PetList :petLists = "petLists[switchTitle]" @petImageLoad ='petImageLoad'/>
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

import { Debounce } from 'assets/utils/utilFun'

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
            {"id":0,"title":"柴犬","image":require('@/assets/img/dog/chaiquan.jpg')} ,
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
      showArrowTop: false,
      tabControlTop: 0,
      isShowTabcontrol: false,
      currentIndex: 0,
      refresh: null,
      loadMoreImages: {
        dog: {
          "page": 1,
          "list": [
            {"id":16,"title":"宠物16","image":require('@/assets/img/dogMore/dog17.jpg')} ,
            {"id":17,"title":"宠物17","image":require('@/assets/img/dogMore/dog18.jpg')} ,
            {"id":18,"title":"宠物18","image":require('@/assets/img/dogMore/dog19.jpg')} ,
            {"id":19,"title":"宠物19","image":require('@/assets/img/dogMore/dog20.jpg')} ,
            {"id":20,"title":"宠物20","image":require('@/assets/img/dogMore/dog21.jpg')} ,
            {"id":21,"title":"宠物21","image":require('@/assets/img/dogMore/dog22.jpg')} ,
            {"id":22,"title":"宠物22","image":require('@/assets/img/dogMore/dog23.jpg')} ,
            {"id":23,"title":"宠物23","image":require('@/assets/img/dogMore/dog24.jpg')},
          ]
        },
        cat: {
          "page": 1,
          "list": [
            {"id":8,"title":"宠物08","image":require('@/assets/img/catMore/cat11.jpg')} ,
            {"id":9,"title":"宠物09","image":require('@/assets/img/catMore/cat12.jpg')} ,
            {"id":10,"title":"宠物10","image":require('@/assets/img/catMore/cat13.jpg')} ,
            {"id":11,"title":"宠物11","image":require('@/assets/img/catMore/cat14.jpg')} ,
            {"id":12,"title":"宠物12","image":require('@/assets/img/catMore/cat15.jpg')} ,
            {"id":13,"title":"宠物13","image":require('@/assets/img/catMore/cat16.jpg')} ,
            {"id":14,"title":"宠物14","image":require('@/assets/img/catMore/cat17.jpg')} ,
            {"id":15,"title":"宠物15","image":require('@/assets/img/catMore/cat18.jpg')}
          ]
        },
        tiger: {
          "page": 1,
          "list": [
            {"id":8,"title":"宠物08","image":require('@/assets/img/tigerMore/tiger11.jpg')} ,
            {"id":9,"title":"宠物09","image":require('@/assets/img/tigerMore/tiger12.jpg')} ,
            {"id":10,"title":"宠物10","image":require('@/assets/img/tigerMore/tiger13.jpg')} ,
            {"id":11,"title":"宠物11","image":require('@/assets/img/tigerMore/tiger14.jpg')} ,
            {"id":12,"title":"宠物12","image":require('@/assets/img/tigerMore/tiger15.jpg')} ,
            {"id":13,"title":"宠物13","image":require('@/assets/img/tigerMore/tiger16.jpg')} ,
            {"id":14,"title":"宠物14","image":require('@/assets/img/tigerMore/tiger17.jpg')} ,
            {"id":15,"title":"宠物15","image":require('@/assets/img/tigerMore/tiger18.jpg')}
          ]
        }
      }
    }
  },
  methods: {

    /**
     * 选项卡数据的切换
     */
    tabControlClick(index){

      this.currentIndex = index
      this.switchTitle = this.switchTitles[index]
      this.$refs.tabcontrol2.currentIndex = index
      this.$refs.tabcontrol1.currentIndex = index
    },

    /**
     * 点击箭头回到页面顶部
     */
    arrowClick(){

      this.$refs.scroll.scroolTo(0,0,500);
    },

    /**
     * scroll组件传递'position'的值
     */
    contentScroll(position){

      // 显示回到页面顶部箭头的判断
      this.showArrowTop = -position.y > 600

      // 显示tab-control的判断
      this.isShowTabcontrol = -position.y > this.tabControlTop
    },

    /**
     * 获取tabControl的offsetTop
     */
    swiperLoad(){

      this.tabControlTop = this.$refs.tabcontrol2.$el.offsetTop
    },

    /**
     * 延时刷新scroll的refresh函数
     */
    petImageLoad(){

      this.refresh();
    },

    /**
     * 上拉加载更多
     */
    loadMore(){

      console.log('加载更多...')

      this.petLists[this.switchTitle].list.push(...(this.loadMoreImages[this.switchTitle].list))

      this.$refs.scroll.finishPullUp();

    }
  },
  mounted(){

    this.global.flag = false

    // Bscroll的scrollHight的刷新
    this.refresh = Debounce(this.$refs.scroll.refresh,300)
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

.tab_control {

  position: relative;
  z-index: 9;
}
</style>
