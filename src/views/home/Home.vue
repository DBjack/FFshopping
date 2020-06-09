<template>
  <div>
    <!-- 导航组件 -->
    <van-nav-bar title="购物街" :fixed="true" :border="false" />
    <!-- banner组件 -->
    <home-Swiper :banner="banner"></home-Swiper>
    <!-- 推荐组件 -->
    <recommend :recommend="recommend"></recommend>
    <!-- 推荐组件 -->
    <featureView></featureView>
    <!-- 吸顶组件-->
    <van-sticky :offset-top="45">
      <tab-control :title="['流行', '新款', '精选']" @titleChange="titleChange"></tab-control>
    </van-sticky>
    <!-- 商品列表 -->

    <div style="height:2000px;width:100%;background:#ccc"></div>
  </div>
</template>

<script>
import { HomeSwiper, Recommend, FeatureView } from "views/home/childComps"; //轮播图

import TabControl from "@/components/content/TabControl.vue";
import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  components: {
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl
  },
  created() {
    this.getHomeMulti();
  },
  methods: {
    async getHomeMulti() {
      const { data } = await getHomeMultidata();
      this.banner = data.banner.list;
      this.recommend = data.recommend.list;
    },
    /**
     * 切换分类
     */
    titleChange() {}
  }
};
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #ff8a9d;
}
/deep/ .van-nav-bar__title {
  color: #fff;
}
</style>
