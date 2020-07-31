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
      imgList: [],
      popImags: [],
      titles: ["Dog","Cat","Tiger"],
      switchTitles:['dog','cat','tiger'],
      switchTitle: 'dog',
      petLists: [],
      showArrowTop: false,
      tabControlTop: 0,
      isShowTabcontrol: false,
      currentIndex: 0,
      refresh: null,
      loadMoreImages: null,
      currentDogPage: 0,
      currentCatPage:0,
      currentTigerPage:0
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

      if(this.switchTitle == 'dog' && this.currentDogPage == 0){

        this.petLists[this.switchTitle].list.push(...(this.loadMoreImages[this.switchTitle].list))

         this.currentDogPage += 1
    
      }
      else if(this.switchTitle == 'cat' && this.currentCatPage == 0 ){

        this.petLists[this.switchTitle].list.push(...(this.loadMoreImages[this.switchTitle].list))

         this.currentCatPage += 1 
        
      }
      else if(this.switchTitle == 'tiger' && this.currentTigerPage == 0){
        this.petLists[this.switchTitle].list.push(...(this.loadMoreImages[this.switchTitle].list))

         this.currentTigerPage += 1 
      }

      this.$refs.scroll.finishPullUp();
    }
  },
  created(){

    // 设置数据
    this.imgList = this.$test.imgList
    this.popImags = this.$test.popImags
    this.petLists = this.$test.petLists
    this.loadMoreImages = this.$test.loadMoreImages
  },
  mounted(){

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
