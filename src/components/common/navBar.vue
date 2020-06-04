<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "#ff852a",
    },
    textColor: {
      type: String,
      default: "#fff",
    },
  },
};
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  height: 40px;
  width: 100%;
  background: #ff852a;
  box-shadow: 0 1px 3px #c1c1c1;
  .left {
    width: 20%;
  }
  .center {
    width: 80%;
    line-height: 40px;
    text-align: center;
  }
  .right {
    width: 20%;
  }
}
</style>
