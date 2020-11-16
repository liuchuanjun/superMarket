<template>
  <div class="wrapper">
    <div>我是个人页面</div>
    <div>{{$store.state.counter}}</div>
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
  }
};
</script>
<style lang="scss" scoped>
.wrapper{

  width: 100%;
  height: 100%;
}
</style>