<template>
  <div class="container">
    <h2>this.$toast</h2>
    <h4>支持属性:</h4>
    <ul>
      <li>autoClose：是否自动关闭（默认5s后提示自动关闭）</li>
      <li>closeButton：关闭按钮选项（可以设置按钮文本以及后续操作）</li>
      <li>position：提示弹出位置（默认为top）</li>
      <li>enableHtml：是否支持HTML（默认为false）</li>
    </ul>
    <h4>预览</h4>
    <f-button @click="$toast('点击弹出提示')">上方弹出</f-button>
    <f-button @click="$toast('点击弹出提示', { position: 'middle' })"
      >中间弹出</f-button
    >
    <f-button @click="$toast('点击弹出提示', { position: 'bottom' })"
      >下方弹出</f-button
    >
  </div>
</template>
<script>
import FButton from "../../../src/button.vue";
import plugin from "../../../src/plugin.js";
import Vue from "vue";
Vue.use(plugin);

export default {
  components: {
    "f-button": FButton,
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}
.container:hover {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3), 0 2px 4px 0 rgba(0, 0, 0, 0.3);
}
.fallen-toast {
  z-index: 30 !important;
}
ul > li {
  list-style: circle;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
