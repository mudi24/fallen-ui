<template>
  <div class="container">
    <f-button @click="onClickButton">中间弹出</f-button>
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
  methods: {
    onClickButton() {
      this.$toast("我在这里提示你", {
        position: "middle",
        closeButton: {
          text: "我知道了",
          callback: () => {
            console.log("他关闭了提示");
          },
        },
      });
    },
  },
};
</script>

<style>
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
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
