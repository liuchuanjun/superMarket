<template>
  <div id="app">
    <router-view></router-view>
    <tabBar>
      <tab-bar-item link="/home">
        <img slot="item-icon" src="@/assets/img/home.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/img/home-active.png" alt=""/>
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item link="/catgory">
        <img slot="item-icon" src="@/assets/img/fenlei.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/img/fenlei-active.png" alt=""/>
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item link="/shop">
        <img slot="item-icon" src="@/assets/img/shop.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/img/shop-active.png" alt=""/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item link="/profile">
        <img slot="item-icon" src="@/assets/img/profile.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/img/profile-active.png" alt=""/>
        <div slot="item-text">我的</div>
      </tab-bar-item>

  </tabBar>
  </div>
</template>

<script>
import TabBar from 'components/content/tabbar/TabBar'
import TabBarItem from 'components/common/tabBarItem/TabBarItem'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

@import 'assets/css/base.css';

</style>
