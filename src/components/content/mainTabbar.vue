<template>
  <div class="mainTabbar">
    <tabBarItem
      v-for="(item, index) in itemList"
      :key="index"
      :active="true"
      :path="item.path"
    >
      <div slot="icon">
        <svg class="icon" aria-hidden="true">
          <use :href="item.icon"></use>
        </svg>
      </div>
      <div slot="iconActive">
        <svg class="icon" aria-hidden="true">
          <use :href="item.iconActive"></use>
        </svg>
      </div>
      {{ item.label }}
    </tabBarItem>
  </div>
</template>

<script>
import tabBarItem from "components/common/tabBarItem";
export default {
  data() {
    return {
      itemList: [
        {
          label: "首页",
          icon: "#icon-shouye",
          iconActive: "#icon-index-fill",
          path: "/home",
        },
        {
          label: "分类",
          icon: "#icon-fenlei",
          iconActive: "#icon-2",
          path: "/category",
        },
        {
          label: "购物车",
          icon: "#icon-gouwuche",
          iconActive: "#icon-gouwuche1",
          path: "/shopCart",
        },
        {
          label: "个人中心",
          icon: "#icon-wode",
          iconActive: "#icon-wodedangxuan",
          path: "/personal",
        },
      ],
    };
  },
  components: { tabBarItem },
};
</script>

<style>
.mainTabbar {
  width: 100%;
  height: 60px;
  padding: 4px 0;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #c1c1c1;
  background: #fff;
  display: flex;
  justify-content: space-around;
}
.active {
  color: rgb(255, 78, 34);
}
</style>
