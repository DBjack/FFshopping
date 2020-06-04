<template>
  <div>
    <navBar>
      <span slot="center" class="title">购物街</span>
    </navBar>
    <home-Swiper>
      <home-SwiperItem v-for="(item,index) in bannerList" :key="index" :imgUrl="item.image"></home-SwiperItem>
    </home-Swiper>
  </div>
</template>

<script>
import navBar from "components/common/navBar";
import { HomeSwiper, HomeSwiperItem } from "views/home/childComps"; //轮播图

import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      bannerList: []
    };
  },
  components: {
    navBar,
    HomeSwiper,
    HomeSwiperItem
  },
  created() {
    this.getHomeMulti();
  },
  methods: {
    async getHomeMulti() {
      const homeMultiData = await getHomeMultidata();
      const {
        data: {
          banner: { list }
        },
        // dkeyword,
        // keywords,
        // recommend,
        // returnCode,
        success
      } = homeMultiData;
      if (success) {
        this.bannerList = list;
        console.log(list);
      }
    }
  }
};
</script>

<style>
.title {
  color: #fff;
}
</style>
