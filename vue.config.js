const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        components: "@/components",
        common: "@/components/common",
        network: "@/network",
        assets: "@/assets",
        views: "@/views",
      },
    },
  },
};
