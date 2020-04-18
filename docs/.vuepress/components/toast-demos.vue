<template>
  <div class="container">
    <f-button @click="$toast('点击弹出提示')">上方弹出</f-button>
    <f-button @click="$toast('点击弹出提示', { position: 'middle' })"
      >中间弹出</f-button
    >
    <f-button
      @click="$toast('点击弹出提示', { autoClose: 3, position: 'bottom' })"
      >下方弹出</f-button
    >
  </div>
</template>
<script>
import FButton from "../../../src/button.vue";
import ToastPlugin from "../../../src/plugin.js";
import Vue from "vue";
Vue.use(ToastPlugin);

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
ul > li {
  list-style: circle;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
