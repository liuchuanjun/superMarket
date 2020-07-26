<template>
  <div class="wrapper">
    <span v-if="isShow">个人页面</span>
    <span v-else>我是通过全局的数据加载出来的</span>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {

      isShow: true
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {

    this.isShow = this.global.flag
  }
};
</script>
<style lang="scss" scoped>
.wrapper{

  width: 100%;
  height: 100%;
}
</style>