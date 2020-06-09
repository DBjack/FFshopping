<template>
  <div class="title">
    <span
      :class="{ active: activeId === index }"
      @click="activeId = index"
      v-for="(item, index) in title"
      :key="index"
      >{{ item }}</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeId: 0,
    };
  },
  activeId: 0,
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped lang="less">
.title {
  height: 8vh;
  width: 100vw;
  color: #333;
  display: flex;
  justify-content: space-around;
  line-height: 8vh;
  span {
    font-size: 0.4rem;
  }
}
.active {
  color: #ff8a9d;
  border-bottom: 4px solid #ff8a9d;
}
</style>
