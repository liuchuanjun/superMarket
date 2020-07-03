<template lang="html">
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style = "addActiveColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //isShow: false
    }
  },
  props: {

    link: String,
    activeColor: {

      type: String,
      default: 'red'
    }
  },
  computed: {

    isActive(){

      return this.$route.path.indexOf(this.link) != -1
    },

    addActiveColor(){

      return this.isActive ? { color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){

      this.$router.replace(this.link)
    }
  }
}
</script>

<style lang="css" scoped>

.tab-bar-item {

  flex: 1;
  text-align: center;
}

.tab-bar-item img {

  width: 24px;
  height: 24px;
}
</style>
