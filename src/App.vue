<template>
  <div id="app">
    <router-view />
    <mainTabbar />
  </div>
</template>

<script>
import mainTabbar from "components/content/mainTabbar";
import "assets/js/icon.js";
export default {
  name: "App",
  components: { mainTabbar },
};
</script>

<style>
@import "./assets/css/normalize.css";
</style>
