<template lang="html">
  <div class="">
    <tabBar>
      <tab-bar-item link="/home">
        <img slot="item-icon" src="@/assets/img/tabBar/home.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/img/tabBar/home-active.png" alt=""/>
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item link="/catgory">
        <img slot="item-icon" src="@/assets/img/tabBar/fenlei.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/img/tabBar/fenlei-active.png" alt=""/>
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item link="/shop">
        <img slot="item-icon" src="@/assets/img/tabBar/shop.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/img/tabBar/shop-active.png" alt=""/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item link="/profile">
        <img slot="item-icon" src="@/assets/img/tabBar/profile.png" alt=""/>
        <img slot="item-icon-active" src="@/assets/img/tabBar/profile-active.png" alt=""/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
  </tabBar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabBar/TabBar'
import TabBarItem from 'components/common/tabBarItem/TabBarItem'

export default {
  name: "mainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="css">
</style>
