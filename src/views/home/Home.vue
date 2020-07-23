<template lang="html">
  <div class="">
    <Naver>
      <div slot="item-center" class="">购物车</div>
    </Naver>
    <Banner :slideList = "imgList" slidTime = "3000"/>
    <PopItemShow :popImgs="popImags" />
    <TabControl :titles = "titles" @tabControlClick="tabControlClick($event)"/>
    <PetList :petLists = "petLists[switchTitle]" />
  </div>

</template>

<script>
import Banner from 'components/common/banner/Banner'
import Naver from 'components/common/navbar/Navbar'
import TabControl from 'components/content/tabControl/TabControl'
import PetList from 'components/content/petList/PetList'

import PopItemShow from './homeComponents/PopItemShow'

export default {
  name: 'home',
  components: {
    Banner,
    Naver,
    PopItemShow,
    TabControl,
    PetList
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
            {"id":7,"title":"宠物08","image":require('@/assets/img/dog/dog8.jpg')}
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

      }
    }
  },
  methods: {
    tabControlClick(index){

      this.switchTitle = this.switchTitles[index]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
