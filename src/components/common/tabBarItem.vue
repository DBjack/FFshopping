<template>
  <div class="tabbarItem" :class="{ isActive: isActive }">
    <a :href="path">
      <div class="icon">
        <slot name="icon" v-if="!isActive"></slot>
        <slot name="iconActive" v-else></slot>
      </div>
      <span>
        <slot>text</slot>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: "",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
};
</script>

<style lang="less" scoped>
.tabbarItem {
  text-align: center;
  font-size: 16px;
  // color: #5d656b;
  a {
    text-decoration: none;
    color: #5d656b;
  }
  .icon {
    width: 32px;
    height: 32px;
    margin: 0 auto;
  }
  span {
    display: block;
    margin: 4px 0 0 0;
  }
}
.isActive {
  span {
    color: #ff852a !important;
  }
}
</style>
