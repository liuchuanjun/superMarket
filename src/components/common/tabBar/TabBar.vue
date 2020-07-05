<template lang="html">
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

#tab-bar {

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  height: 49px;

  box-shadow: 0px 1px 3px #000;
  background-color: #f6f6f6;
}
</style>
