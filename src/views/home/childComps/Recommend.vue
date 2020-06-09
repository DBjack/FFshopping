<template>
  <div class="recommend">
    <div v-for="(value, index) in recommend" :key="index">
      <a :href="value.link">
        <img :src="value.image" class="recommend-item" />
      </a>
      <span class="title">{{ value.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
  text-align: center;
  .recommend-item {
    width: 20vw;
    height: 20vw;
  }
}
.title {
  display: block;
  font-size: 0.25rem;
  color: #333;
  &:hover {
    color: #ff8a9d;
  }
}
</style>
