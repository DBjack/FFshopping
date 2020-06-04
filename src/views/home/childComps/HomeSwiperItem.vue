<template>
  <div class="swiper-Item">
    <img :src="imgUrl" alt />
  </div>
</template>

<script>
export default {
  name: "HomeSwiperItem",
  props: {
    imgUrl: {
      type: String,
      default: ""
    }
  },
  created() {
    console.log(this.imgUrl);
  }
};
</script>

<style>
.swiper-Item {
  width: 100%;
  height: 100%;
}
</style>
