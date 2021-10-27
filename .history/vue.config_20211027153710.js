/* eslint-disable no-dupe-keys */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    proxy: {
      "/practice": {
        target: "http://localhost:8090",
        changeOrigin: true
      }
    }
  }
};
// VUE_APP_RES_IFRAME_PORT='http://10.154.5.239:30106'

// 资源放在的地方 在7008
// 接口 在7009
